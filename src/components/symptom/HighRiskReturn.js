import React from "react"
import firebase from "firebase"
import ReturnItem from "./ReturnItem"

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
    <div className="symptom-return-container">
      <div>
        <h2>Please Contract Your Doctor</h2>
        <p>
          Based on your symptom accessment, you are currently seen as high risk
          for COVID-19, please contact your local doctor for booking an
          appointment test
        </p>

        <div className="return-item-container">
          <ReturnItem
            title="Contact Doctors"
            info="Contact doctors if you are recovered or have serve symptoms"
            imgUrl="/images/doctor.png"
          />
          <ReturnItem
            title="Isolation Instruction"
            info="Please read the isolation instruction and stay at home before further notice to help our community"
            imgUrl="/images/instruction.png"
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

export default HighRiskReturn
