import React, { Component } from "react"
import firebase from "firebase"
import Loading from "../Loading"
import Banner from "./Banner"
import InformationForm from "./InformationForm"
import Appearance from "./Appearance"
import UserNav from "../UserNav"
class Profile extends Component {
  constructor() {
    super()
    this.state = {
      darkMode: false,
      loading: false,
      username: "",
      profileUrl: "/images/user.jpg",
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      db.collection("user")
        .doc(user.uid)
        .onSnapshot((doc) => {
          this.setState({
            darkMode: doc.data().DarkMode,
          })
        })
    })

    this.setState({ loading: true })
    const db = firebase.firestore()
    firebase.auth().onAuthStateChanged((user) => {
      db.collection("user")
        .doc(user.uid)
        .get()
        .then((snap) => {
          this.setState({
            profileUrl:
              snap.data().Profile === undefined
                ? user.photoURL
                : snap.data().Profile,
            loading: false,
          })
        })

      db.collection("user")
        .doc(user.uid)
        .collection("Doc")
        .doc("Profile")
        .get()
        .then((doc) => {
          if (doc.data().Name) {
            this.setState({
              username: doc.data().Name,
            })
          } else {
            this.setState({
              username: user.displayName,
            })
          }
        })
    })
  }

  render() {
    const darkBackground = {
      backgroundColor: "#121212",
    }

    return (
      <div
        style={this.state.darkMode === true ? darkBackground : null}
        className="main-container"
      >
        <UserNav title="Profile Dashboard" />
        {this.state.loading === true ? (
          <Loading />
        ) : (
          <div>
            <Banner
              name={this.state.username}
              profileUrl={this.state.profileUrl}
              theme={this.state.darkMode}
            />
            <div className="content-container">
              <div className="profile-module-container">
                <InformationForm theme={this.state.darkMode} />
                <Appearance theme={this.state.darkMode} />
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default Profile
