import React, { Component } from "react"
import firebase from "firebase"
import $ from "jquery"

class Accessment extends Component {
  constructor() {
    super()
    this.state = {
      result: "",
      diffBreath: false,
      chestPain: false,
      feelConfuse: false,
      loseConscious: false,
      wakeUp: false,
      fever: false,
      chill: false,
      cough: false,
      soreThroat: false,
      stuffyNose: false,
      loseSmell: false,
      headache: false,
      muscleAche: false,
      fatigue: false,
      lossAppetite: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const { name, type, checked } = event.target
    if (type == "checkbox") {
      this.setState({
        [name]: checked,
      })
    }
  }

  handleSubmit() {
    const db = firebase.firestore()
    let result
    const {
      diffBreath,
      chestPain,
      feelConfuse,
      loseConscious,
      wakeUp,
      fever,
      chill,
      cough,
      soreThroat,
      stuffyNose,
      loseSmell,
      headache,
      muscleAche,
      fatigue,
      lossAppetite,
    } = this.state
    if (diffBreath || chestPain || feelConfuse || loseConscious || wakeUp) {
      result = "High Risk"
    } else if (
      fever ||
      chill ||
      cough ||
      loseSmell ||
      muscleAche ||
      lossAppetite
    ) {
      result = "Moderate Risk"
    } else if (soreThroat || stuffyNose || headache || fatigue) {
      result = "Low Risk"
    }
    this.setState({
      result: result,
    })

    firebase.auth().onAuthStateChanged((user) => {
      db.collection("user").doc(user.uid).collection("Doc").doc("Symptom").set(
        {
          SymptomResult: result,
        },
        {
          merge: true,
        }
      )
    })

    this.state.diffBreath = false
    this.state.chestPain = false
    this.state.feelConfuse = false
    this.state.loseConscious = false
    this.state.wakeUp = false
    this.state.fever = false
    this.state.chill = false
    this.state.cough = false
    this.state.soreThroat = false
    this.state.stuffyNose = false
    this.state.loseSmell = false
    this.state.headache = false
    this.state.muscleAche = false
    this.state.fatigue = false
    this.state.lossAppetite = false
  }

  render() {
    return (
      <div>
        <p className="symptom-header">Do you experience any symptoms below?</p>
        <form className="symptom-form">
          <label>
            <input
              name="diffBreath"
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.diffBreath}
            />
            Difficulty breathing
          </label>
          <label>
            <input
              name="chestPain"
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.chestPain}
            />
            Chest pain
          </label>
          <label>
            <input
              name="feelConfuse"
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.feelConfuse}
            />
            Feeling confused
          </label>
          <label>
            <input
              name="loseConscious"
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.loseConscious}
            />
            Losing consciousness
          </label>
          <label>
            <input
              name="wakeUp"
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.wakeUp}
            />
            Hard time waking up
          </label>
          <label>
            <input
              name="fever"
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.fever}
            />
            Fever
          </label>
          <label>
            <input
              name="chill"
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.chill}
            />
            Chills
          </label>
          <label>
            <input
              name="cough"
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.cough}
            />
            Cough
          </label>
          <label>
            <input
              name="soreThroat"
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.soreThroat}
            />
            Sore throat
          </label>
          <label>
            <input
              name="stuffyNose"
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.stuffyNose}
            />
            Stuffy or runny nose
          </label>
          <label>
            <input
              name="loseSmell"
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.loseSmell}
            />
            Loss of sense of smell
          </label>
          <label>
            <input
              name="headache"
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.headache}
            />
            Headache
          </label>
          <label>
            <input
              name="muscleAche"
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.muscleAche}
            />
            Muscle aches
          </label>

          <label>
            <input
              name="fatigue"
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.fatigue}
            />
            Fatigue
          </label>
          <label>
            <input
              name="lossAppetite"
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.lossAppetite}
            />
            Loss of appetite
          </label>
        </form>
        <button className="accessment-btn" onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    )
  }
}
export default Accessment
