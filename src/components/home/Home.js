import React from "react"
// import firebase from "firebase"
import MyMap from "./MyMap"
import UserNav from "../UserNav"

export default function Home() {
  return (
    <div className="main-container">
      <UserNav title="Home Dashboard" />
      <div className="content-container">
        {/* <h2>Hello, {firebase.auth().currentUser.displayName}</h2> */}
        <MyMap />
      </div>
    </div>
  )
}
