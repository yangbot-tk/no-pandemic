import React, { Component } from "react"
import firebase from "firebase"

class Accessment extends Component {
  constructor() {
    super()
    this.state = {
      result: "",
      symptomList: [],
      reportedSymptom: [],
      submit: false,
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
    this.handleSymptom = this.handleSymptom.bind(this)
  }

  handleChange(event) {
    const { name, type, checked, value } = event.target
    if (type === "checkbox") {
      this.setState((prevState) => {
        return {
          [name]: checked,
          symptomList: [...prevState.symptomList, value],
        }
      })
      console.log(value)
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
    if (
      diffBreath ||
      chestPain ||
      feelConfuse ||
      loseConscious ||
      wakeUp ||
      fever ||
      loseSmell
    ) {
      result = "High Risk"
    } else if (
      chill ||
      cough ||
      muscleAche ||
      lossAppetite ||
      soreThroat ||
      stuffyNose ||
      headache ||
      fatigue
    ) {
      result = "Low Risk"
    }
    this.setState({
      result: result,
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
    })

    firebase.auth().onAuthStateChanged((user) => {
      db.collection("user").doc(user.uid).collection("Doc").doc("Symptom").set(
        {
          SymptomResult: result,
          SymptomList: this.state.symptomList,
          ReportedSymptom: this.state.reportedSymptom,
        },
        {
          merge: true,
        }
      )
    })
  }

  handleSymptom() {
    let value = document.getElementById("symptom-input").value
    this.setState((prevState) => {
      return {
        reportedSymptom: [...prevState.reportedSymptom, value],
      }
    })
    document.getElementById("symptom-input").value = ""
  }

  render() {
    const reportedSymptomList = this.state.reportedSymptom.map((item) => (
      <li>{item}</li>
    ))
    return (
      <div>
        <p className="symptom-header">Do you experience any symptoms below?</p>
        <form className="symptom-form">
          <label>
            <input
              value="Difficulty of Breathing"
              name="diffBreath"
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.diffBreath}
            />
            Difficulty breathing
          </label>
          <label>
            <input
              value="Chest Pain"
              name="chestPain"
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.chestPain}
            />
            Chest pain
          </label>
          <label>
            <input
              value="Feeling Confused"
              name="feelConfuse"
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.feelConfuse}
            />
            Feeling confused
          </label>
          <label>
            <input
              value="Losing consciousness"
              name="loseConscious"
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.loseConscious}
            />
            Losing consciousness
          </label>
          <label>
            <input
              value="Hard time waking up"
              name="wakeUp"
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.wakeUp}
            />
            Hard time waking up
          </label>
          <label>
            <input
              value="Fever"
              name="fever"
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.fever}
            />
            Fever
          </label>
          <label>
            <input
              value="Chills"
              name="chill"
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.chill}
            />
            Chills
          </label>
          <label>
            <input
              value="Cough"
              name="cough"
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.cough}
            />
            Cough
          </label>
          <label>
            <input
              value="Sore throat"
              name="soreThroat"
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.soreThroat}
            />
            Sore throat
          </label>
          <label>
            <input
              value="Stuffy nose"
              name="stuffyNose"
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.stuffyNose}
            />
            Stuffy or runny nose
          </label>
          <label>
            <input
              value="Loss of sense of smell"
              name="loseSmell"
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.loseSmell}
            />
            Loss of sense of smell
          </label>
          <label>
            <input
              value="Headache"
              name="headache"
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.headache}
            />
            Headache
          </label>
          <label>
            <input
              value="Muscle aches"
              name="muscleAche"
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.muscleAche}
            />
            Muscle aches
          </label>

          <label>
            <input
              value="Fatigue"
              name="fatigue"
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.fatigue}
            />
            Fatigue
          </label>
          <label>
            <input
              value="Loss of appetite"
              name="lossAppetite"
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.lossAppetite}
            />
            Loss of appetite
          </label>
        </form>

        <div className="reported-symptom-container">
          <p className="symptom-header">
            Do you experience any other symptoms?
          </p>
          <input id="symptom-input" name="reportedSymptom" type="text" />
          <ul>{reportedSymptomList}</ul>
          <button onClick={this.handleSymptom}>Add</button>
        </div>

        <button className="accessment-btn" onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    )
  }
}
export default Accessment
