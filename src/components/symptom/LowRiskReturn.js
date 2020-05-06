import React from "react"
import firebase from "firebase"
import ReturnItem from "./ReturnItem"

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
    <div className="symptom-return-container">
      <div>
        <h2>You already filled the symptom accessment</h2>
        <p>
          We already have your data, and we are accessed as low risk for this
          epedemic. Do you want to uodate your symptom?
        </p>

        <div className="return-item-container">
          <div onClick={changeSymptom}>
            <ReturnItem
              title="Change My Symptom"
              info="Contact doctors if you are recovered or have serve symptoms"
              imgUrl="/images/edit.png"
            />
          </div>
          <ReturnItem
            title="Preventations"
            info="Learn how to prevent yourself for COIV-19 epidemic"
            imgUrl="/images/mask.png"
          />
          <ReturnItem
            title="Aid"
            info="Please checkout the resource package we provided for you"
            imgUrl="/images/formaid.png"
          />
        </div>
      </div>
    </div>
  )
}

export default LowRiskReturn
