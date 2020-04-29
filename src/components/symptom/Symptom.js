import React, { Component } from "react"
import Accessment from "./Accessment"
import Recheck from "./Recheck"
import firebase from "firebase"
import Loading from "../Loading"

class Symptom extends Component {
  constructor() {
    super()
    this.state = {
      symptomResult: null,
    }
  }

  componentDidMount() {
    this.setState({ symptomResult: "loading" })
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
            symptomResult: snap.data().SymptomResult,
          })
        )
    )
  }

  render() {
    return (
      <div className="main-container">
        <h1>COVID-19 Accessment</h1>
        <div className="content-container">
          {this.state.symptomResult === "loading" ? (
            <Loading />
          ) : this.state.symptomResult == null ? (
            <Accessment />
          ) : (
            <Recheck />
          )}
        </div>
      </div>
    )
  }
}
export default Symptom
