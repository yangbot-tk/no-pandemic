import React, { useState, useEffect } from "react"
import firebase from "firebase"

function Header() {
  const db = firebase.firestore()
  const [userName, setUserName] = useState("")

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
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
    <div className="aid-header-container">
      <div>
        <h2>Dear {userName}</h2>
        <p>
          We know this is a hard to experience, and we provided the following
          resource to help you to go through it
        </p>
      </div>
      <img src="/images/aidbanner.png" alt="aid-banner" />
    </div>
  )
}

export default Header
