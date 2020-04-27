import React from "react"
import Banner from "./Banner"
import InformationForm from "./InformationForm"
import Appearance from "./Appearance"

function Profile() {
  return (
    <div className="main-container">
      <h1>Profile Dashboard</h1>
      <Banner />
      <div className="content-container">
        <div className="profile-module-container">
          <InformationForm />
          <Appearance />
        </div>
      </div>
    </div>
  )
}
export default Profile
