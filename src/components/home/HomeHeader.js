import React, { useState } from "react"
import firebase from "firebase"

function HomeHeader() {
  const [name, setName] = useState("")

  const db = firebase.firestore()
  firebase.auth().onAuthStateChanged((user) =>
    db
      .collection("user")
      .doc(user.uid)
      .get()
      .then((snap) => setName(snap.data().Name))
  )
  return (
    <div className="home-header">
      <div>
        <h2>Hello, {name}!</h2>
        <p>
          Welcome back to NoPandemic, know your surroundings and stay healthy.
        </p>
      </div>
      <img src="/images/mapheader.png" alt="map-header" />
    </div>
  )
}

export default HomeHeader
