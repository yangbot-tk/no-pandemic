import React, { useState, useEffect } from "react"
import Inbox from "./navbar/Inbox"
import ProfileNav from "./ProfileNav"
import firebase from "firebase"

function UserNav(props) {
  const db = firebase.firestore()
  const [darkMode, setDarkMode] = useState(false)
  const darkSurface = {
    backgroundColor: "#333",
    transition: "all 0.5s",
  }
  const darkText = {
    color: "white",
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
    <div
      style={darkMode === true ? darkSurface : null}
      className="usernav-container"
    >
      <h1 style={darkMode === true ? darkText : null}>{props.title}</h1>
      <div className="usernav-icon">
        <Inbox />
        <ProfileNav />
      </div>
    </div>
  )
}

export default UserNav
