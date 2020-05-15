import React, { useState } from "react"
import { Link } from "react-router-dom"
import firebase from "firebase"
import ReturnItem from "./ReturnItem"
import IsolationSlide from "./IsolationSlide"
import NearMe from "./NearMe"

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

  const [manual, setManual] = useState(false)
  const [doctor, setDoctor] = useState(false)

  function showDoctor() {
    setDoctor(true)
  }

  function offDoctor() {
    setDoctor(false)
  }

  function showInstruction() {
    setManual(true)
  }

  function offInstruction() {
    setManual(false)
  }

  return (
    <div>
      {manual === true ? <IsolationSlide offToggle={offInstruction} /> : null}
      {doctor === true ? (
        <div className="preventation-modal">
          <div className="modal-btn">
            <button onClick={offDoctor}>Close</button>
          </div>
          <NearMe />
        </div>
      ) : null}
      <div className="symptom-return-container">
        <div className="symptom-return-alert">
          <img src="/images/success.png" alt="alert" />
          <div>
            <h2>Please Contact Your Doctor</h2>
            <p>
              Based on your symptom accessment, you are currently seen as high
              risk for COVID-19, please contact your local doctor for booking an
              appointment test
            </p>
          </div>
        </div>

        <div className="return-item-container">
          <div onClick={showDoctor}>
            <ReturnItem
              title="Contact Doctors"
              info="Contact doctors if you are recovered or have serve symptoms"
              imgUrl="/images/doctor.png"
            />
          </div>
          <div onClick={showInstruction}>
            <ReturnItem
              title="Isolation Instruction"
              info="We recommend you self isolate if you developed symptoms to help our community"
              imgUrl="/images/instruction.png"
            />
          </div>
          <Link to="/signin/aid">
            <ReturnItem
              title="Aid"
              info="Please checkout the resource package we provided for you"
              imgUrl="/images/formaid.png"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HighRiskReturn
