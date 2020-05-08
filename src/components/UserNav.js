import React from "react"
import Inbox from "./navbar/Inbox"
import ProfileNav from "./ProfileNav"

function UserNav(props) {
  return (
    <div className="usernav-container">
      <h1>{props.title}</h1>
      <div className="usernav-icon">
        <Inbox />
        <ProfileNav />
      </div>
    </div>
  )
}

export default UserNav
