import React, { useState, useEffect } from "react"
import firebase from "firebase"

function Feedback(props) {
  const [show, setShow] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const db = firebase.firestore()

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
    backgroundColor: "rgba(0, 0, 0, 0)",
  }

  function toggle() {
    window.location.reload()
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      db.collection("user")
        .doc(user.uid)
        .onSnapshot((doc) => {
          setDarkMode(doc.data().DarkMode)
        })
    })
  }, [])

  return (
    <div>
      {show === true ? (
        <div
          style={darkMode === true ? darkSurface : null}
          className="feedback-container"
        >
          <div>
            <img src={props.imgUrl} alt="feedback info" />
            <h3 style={darkMode === true ? darkText : null}>{props.msg}</h3>
            <p style={darkMode === true ? darkSecondaryText : null}>
              {props.info}
            </p>
            <button
              style={darkMode === true ? darkInput : null}
              onClick={toggle}
            >
              OK
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Feedback
