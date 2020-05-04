import React from "react"
import firebase from "firebase"

function HighRiskReturn() {
  function handleChange() {
    const db = firebase.firestore()
    firebase.auth().onAuthStateChanged((user) => {
      db.collection("user")
        .doc(user.uid)
        .collection("Doc")
        .doc("Symptom")
        .update({
          SymptomResult: "Wait",
        })
    })
  }
  return (
    <div className="error-container">
      <h2>Please Contract Your Doctor</h2>
      <p>
        Based on your symptom accessment, you are currently seen as high risk
        for COVID-19, please contact your local doctor for booking an
        appointment test
      </p>
      <button onClick={handleChange}>Contact Local Doctor</button>
    </div>
  )
}

export default HighRiskReturn
