import React, { useState } from "react"
import firebase from "firebase"
import ReturnItem from "./ReturnItem"
import Progress from "../Progress"
import Feedback from "../Feedback"

function LowRiskReturn() {
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)

  function changeSymptom() {
    setLoading(true)
    setTimeout(function () {
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

      setLoading(false)
      setShow(true)
    }, 2000)
  }

  return (
    <div>
      {loading === true ? <Progress /> : null}

      {show === true ? (
        <Feedback
          msg="Success"
          info="Your symptom form has been reset"
          imgUrl="/images/success.png"
        />
      ) : null}
      <div className="symptom-return-container">
        <h2>You already filled the symptom accessment</h2>
        <p>
          We already have your data, and we are accessed as low risk for this
          epedemic. Do you want to uodate your symptom?
        </p>

        <div className="return-item-container">
          <div onClick={changeSymptom}>
            <ReturnItem
              title="Change My Symptom"
              info="Empty your curreny symptom information and refill the form"
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
