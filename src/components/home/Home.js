import React from "react"
// import firebase from "firebase"
import MyMap from "./MyMap"
import Loading from "../Loading"

export default function Home() {
  return (
    <div className="main-container">
      <h1>Home Dashboard</h1>
      <div className="content-container">
        {/* <h2>Hello, {firebase.auth().currentUser.displayName}</h2> */}
        <MyMap />
      </div>
    </div>
  )
}
