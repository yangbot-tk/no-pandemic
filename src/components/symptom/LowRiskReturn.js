import React from "react"
import firebase from "firebase"

function LowRiskReturn() {
  function changeSymptom() {
    const db = firebase.firestore()
    const fieldDelete = firebase.firestore.FieldValue.delete()
    firebase.auth().onAuthStateChanged((user) => {
      db.collection("user")
        .doc(user.uid)
        .collection("Doc")
        .doc("Symptom")
        .update({
          SymptomResult: fieldDelete,
          SymptomList: fieldDelete,
          ReportedSymptom: fieldDelete,
        })
    })
  }

  return (
    <div className="error-container">
      <h2>You already filled the symptom accessment</h2>
      <p>
        We already have your data, and we are accessed as low risk for this
        epedemic. Do you want to uodate your symptom?
      </p>
      <button onClick={changeSymptom}>Reaccess My Symptom</button>
    </div>
  )
}

export default LowRiskReturn
