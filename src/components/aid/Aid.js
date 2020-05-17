import React, { Component } from "react"
import firebase from "firebase"
import HighRisk from "./HighRisk"
import LowRisk from "./LowRisk"
import Confirmed from "./Confirmed"
import Error from "./Error"
import Loading from "../Loading"
import UserNav from "../UserNav"

class Aid extends Component {
  constructor() {
    super()
    this.state = {
      darkMode: false,
      risk: null,
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

    this.setState({ risk: "loading" })
    const db = firebase.firestore()
    firebase.auth().onAuthStateChanged((user) =>
      db
        .collection("user")
        .doc(user.uid)
        .collection("Doc")
        .doc("Symptom")
        .get()
        .then((snap) =>
          this.setState({
            risk: snap.data().SymptomResult,
          })
        )
    )
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
        <UserNav title="Aid Dashboard" />

        <div className="content-container">
          {this.state.risk === "loading" ? (
            <Loading />
          ) : this.state.risk === "High Risk" ? (
            <HighRisk theme={this.state.darkMode} />
          ) : this.state.risk === "Wait" ? (
            <HighRisk theme={this.state.darkMode} />
          ) : this.state.risk === "Test" ? (
            <HighRisk theme={this.state.darkMode} />
          ) : this.state.risk === "Low Risk" ? (
            <LowRisk theme={this.state.darkMode} />
          ) : this.state.risk === "Confirmed" ? (
            <Confirmed theme={this.state.darkMode} />
          ) : (
            <Error theme={this.state.darkMode} />
          )}
        </div>
      </div>
    )
  }
}
export default Aid
