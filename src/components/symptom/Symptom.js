import React, { Component } from "react"
import Accessment from "./Accessment"
import Recheck from "./Recheck"
import firebase from "firebase"

class Symptom extends Component {
  constructor() {
    super()
    this.state = {
      symptomResult: null,
    }
  }

  componentDidMount() {
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
    console.log(this.state.symptomResult)
  }

  render() {
    return (
      <div className="main-container">
        <h1>COVID-19 Accessment</h1>
        <div className="content-container">
          {this.state.symptomResult == null ? <Accessment /> : <Recheck />}
        </div>
      </div>
    )
  }
}
export default Symptom
