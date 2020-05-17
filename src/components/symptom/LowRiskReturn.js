import React, { useState } from "react"
import { Link } from "react-router-dom"
import firebase from "firebase"
import ReturnItem from "./ReturnItem"
import Progress from "../Progress"
import Feedback from "../Feedback"
import Preventaion from "../aid/lowrisk/Preventation"

function LowRiskReturn(props) {
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)
  const [preventation, setPreventation] = useState(false)

  const darkBackground = {
    backgroundColor: "#121212",
  }

  const darkModal = {
    backgroundColor: "#121212",
    border: "1px solid #333",
  }

  const darkSurface = {
    backgroundColor: "#333",
  }

  const darkText = {
    color: "white",
  }

  const darkSecondaryText = {
    color: "rgba(255, 255, 255, 0.5)",
  }

  const darkInput = {
    backgroundColor: "rgba(0, 0, 0 ,0)",
  }

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

  function showPreventation() {
    setPreventation(true)
  }

  function offPreventation() {
    setPreventation(false)
  }

  return (
    <div>
      {/* 症状表单重制 */}
      {loading === true ? <Progress /> : null}

      {show === true ? (
        <Feedback
          msg="Success"
          info="Your symptom form has been reset"
          imgUrl="/images/success.png"
        />
      ) : null}

      {/* 预防措施modal */}
      {preventation === true ? (
        <div
          style={props.theme === true ? darkModal : null}
          className="preventation-modal"
        >
          <div className="preventation-modal-content">
            <Preventaion theme={props.theme} />
          </div>
          <div className="modal-btn">
            <button
              style={props.theme === true ? darkInput : null}
              onClick={offPreventation}
            >
              Return
            </button>
          </div>
        </div>
      ) : null}

      <div className="symptom-return-container">
        <div
          style={props.theme === true ? darkSurface : null}
          className="symptom-return-alert"
        >
          <img src="/images/success.png" alt="alert" />
          <div>
            <h2 style={props.theme === true ? darkText : null}>
              You already filled the symptom accessment
            </h2>
            <p style={props.theme === true ? darkSecondaryText : null}>
              We already have your data, and we are accessed as low risk for
              this epedemic. Do you want to uodate your symptom?
            </p>
          </div>
        </div>

        <div className="return-item-container">
          <div onClick={changeSymptom}>
            <ReturnItem
              title="Change My Symptom"
              info="Empty your curreny symptom information and refill the form"
              imgUrl="/images/edit.png"
              theme={props.theme}
            />
          </div>
          <div onClick={showPreventation}>
            <ReturnItem
              title="Preventations"
              info="Learn how to prevent yourself for COIV-19 epidemic"
              imgUrl="/images/mask.png"
              theme={props.theme}
            />
          </div>
          <Link to="/signin/aid">
            <ReturnItem
              title="Aid"
              info="Please checkout the resource package we provided for you"
              imgUrl="/images/formaid.png"
              theme={props.theme}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LowRiskReturn
