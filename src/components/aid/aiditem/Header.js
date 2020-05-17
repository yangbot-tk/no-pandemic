import React, { useState, useEffect } from "react"
import firebase from "firebase"

function Header() {
  const db = firebase.firestore()
  const [userName, setUserName] = useState("")
  const [darkMode, setDarkMode] = useState(false)
  const darkSurface = {
    backgroundColor: "#333",
  }

  const darkText = {
    color: "white",
  }

  const darkSecondaryText = {
    color: "rgba(255, 255, 255, 0.5)",
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      db.collection("user")
        .doc(user.uid)
        .onSnapshot((doc) => {
          setDarkMode(doc.data().DarkMode)
        })

      db.collection("user")
        .doc(user.uid)
        .get()
        .then((doc) => {
          setUserName(doc.data().Name)
        })

      db.collection("user")
        .doc(user.uid)
        .collection("Doc")
        .doc("Profile")
        .get()
        .then((doc) => {
          if (doc.data().Name) {
            setUserName(doc.data().Name)
          }
        })
    })
  }, [])

  return (
    <div
      style={darkMode === true ? darkSurface : null}
      className="aid-header-container"
    >
      <div>
        <h2 style={darkMode === true ? darkText : null}>Dear {userName}</h2>
        <p style={darkMode === true ? darkSecondaryText : null}>
          We know this is a hard to experience, and we provided the following
          resource to help you to go through it
        </p>
      </div>
      <img src="/images/aidbanner.png" alt="aid-banner" />
    </div>
  )
}

export default Header
