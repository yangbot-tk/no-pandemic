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
      loading: false,
      username: "",
      profileUrl: "/images/user.jpg",
    }
  }

  componentDidMount() {
    this.setState({ loading: true })
    const db = firebase.firestore()
    firebase.auth().onAuthStateChanged((user) => {
      db.collection("user")
        .doc(user.uid)
        .get()
        .then((snap) => {
          this.setState({
            username: snap.data().Name,
            profileUrl:
              snap.data().Profile === undefined
                ? user.photoURL
                : snap.data().Profile,
            loading: false,
          })
        })
    })
  }

  render() {
    return (
      <div className="main-container">
        <UserNav title="Profile Dashboard" />
        {this.state.loading === true ? (
          <Loading />
        ) : (
          <div>
            <Banner
              name={this.state.username}
              profileUrl={this.state.profileUrl}
            />
            <div className="content-container">
              <div className="profile-module-container">
                <InformationForm />
                <Appearance />
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default Profile
