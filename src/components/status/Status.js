import React, { useState, useEffect } from "react"
import Global from "./Global"
import Canada from "./Canada"
import CovMap from "./CovMap"
import News from "./News"
import UserNav from "../UserNav"
import $ from "jquery"
import firebase from "firebase"

function Status() {
  const db = firebase.firestore()
  const [darkMode, setDarkMode] = useState(false)

  const darkSurface = {
    backgroundColor: "#121212",
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      db.collection("user")
        .doc(user.uid)
        .onSnapshot((doc) => {
          setDarkMode(doc.data().DarkMode)
        })
    })
  })

  return (
    <div
      style={darkMode === true ? darkSurface : null}
      className="main-container"
    >
      <UserNav title="Status Dashboard" />
      <div className="status-container">
        <div className="status-main">
          <div className="status-left-container">
            <div className="status-top-container">
              <Canada theme={darkMode} />
              <CovMap />
            </div>
            <Global theme={darkMode} />
          </div>
          <News theme={darkMode} />
        </div>
      </div>
    </div>
  )
}
export default Status
