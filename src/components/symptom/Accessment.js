import React, { Component } from "react"
import firebase from "firebase"
import FormHelp from "./accessment/FormHelp"

class Accessment extends Component {
  constructor() {
    super()
    this.state = {
      report: "",
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
    } else {
      this.setState({
        [name]: value,
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
    const db = firebase.firestore()
    let value = document.getElementById("symptom-input").value
    this.setState((prevState) => {
      return {
        reportedSymptom: [...prevState.reportedSymptom, value],
      }
    })
    let docData = {
      Symptom: value,
    }
    db.collection("reportedSymptom").add(docData)
    document.getElementById("symptom-input").value = ""
  }

  mostFrequent() {
    let words = ""
    const db = firebase.firestore()
    db.collection("reportedSymptom")
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          words += " " + doc.data().Symptom
        })
        let word = words.replace(/[.]/g, "").split(/\s/).sort()
        console.log(word)
      })
  }

  render() {
    const reportedSymptomList = this.state.reportedSymptom.map((item) => (
      <li>{item}</li>
    ))
    return (
      <div className="accessment-container">
        <div className="accessment-form-container">
          <div className="accessment-header">
            <h2>Let us know about you in order to help our community</h2>
            <p>
              By filling this symptom information, our professional physicians
              will access your risk leve related to this current epidemic. We
              then could provide the resource package to you in aid page
            </p>
          </div>

          <div className="accessment-form1-container">
            <h4 className="symptom-header">
              <i className="fas fa-heartbeat"></i>Symptoms
            </h4>
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
          </div>

          <div className="reported-symptom-container">
            <div className="report-status-container">
              <h4 className="symptom-header">
                <i className="fas fa-notes-medical"></i>Others
              </h4>
              <p>Do you experience other symptoms would like to report?</p>
              <label>
                <input
                  type="radio"
                  name="report"
                  value="Yes"
                  checked={this.state.report === "Yes"}
                  onChange={this.handleChange}
                />
                Yes
              </label>

              <label>
                <input
                  type="radio"
                  name="report"
                  value="No"
                  checked={this.state.report === "No"}
                  onChange={this.handleChange}
                />
                No
              </label>
            </div>
            {this.state.report === "Yes" ? (
              <div className="selfreport-container">
                <p>What symptoms do you experience?</p>
                <input id="symptom-input" name="reportedSymptom" type="text" />
                <button onClick={this.handleSymptom}>Add</button>
                <ul>{reportedSymptomList}</ul>
              </div>
            ) : null}
          </div>

          <button className="accessment-btn" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
        {/* <button onClick={this.mostFrequent}>Show frequent word</button> */}

        <div className="accessment-formhelp-container">
          <h2>FAQ</h2>
          <FormHelp
            title="Why should I fill this form?"
            content=" By filling this symptom information, our professional physicians will
          access your risk leve related to this current epidemic. We then could
          provide the resource package to you in aid page"
          />
          <FormHelp
            title="Why should I fill this form?"
            content=" By filling this symptom information, our professional physicians will
          access your risk leve related to this current epidemic. We then could
          provide the resource package to you in aid page"
          />
          <FormHelp
            title="Why should I fill this form?"
            content=" By filling this symptom information, our professional physicians will
          access your risk leve related to this current epidemic. We then could
          provide the resource package to you in aid page"
          />
          <FormHelp
            title="Why should I fill this form?"
            content=" By filling this symptom information, our professional physicians will
          access your risk leve related to this current epidemic. We then could
          provide the resource package to you in aid page"
          />
        </div>
      </div>
    )
  }
}
export default Accessment
