import React, { Component } from "react"
import firebase from "firebase"
import HighRisk from "./HighRisk"
import ModerateRisk from "./ModerateRisk"
import LowRisk from "./LowRisk"
import Error from "./Error"
import Loading from "../Loading"

class Aid extends Component {
  constructor() {
    super()
    this.state = {
      risk: null,
    }
  }
  componentDidMount() {
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
    return (
      <div className="main-container">
        <h1>Aid Dashboard</h1>

        <div className="content-container">
          {this.state.risk === "loading" ? (
            <Loading />
          ) : this.state.risk === "High Risk" ? (
            <HighRisk />
          ) : this.state.risk === "Moderate Risk" ? (
            <ModerateRisk />
          ) : this.state.risk === "Low Risk" ? (
            <LowRisk />
          ) : (
            <Error />
          )}
        </div>
      </div>
    )
  }
}
export default Aid
