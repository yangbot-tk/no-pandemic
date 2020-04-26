import React from "react"
import Banner from "./Banner"
import InformationForm from "./InformationForm"

function Profile() {
  return (
    <div className="main-container">
      <h1>Profile Dashboard</h1>
      <Banner />
      <div className="content-container">
        <hr />
        <InformationForm />
        <hr />

        <div>
          <h2>Appearance</h2>
          <p>Theme: darkmode</p>
        </div>

        <div>
          <h2>Notification</h2>
          <p>Notification: off</p>
        </div>
      </div>
    </div>
  )
}
export default Profile
