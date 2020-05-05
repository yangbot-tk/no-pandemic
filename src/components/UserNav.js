import React from "react"
import Inbox from "./navbar/Inbox"

function UserNav(props) {
  return (
    <div className="usernav-container">
      <h1>{props.title}</h1>
      <div className="usernav-icon">
        <Inbox />
        <img
          src="/images/user.jpg"
          alt="user-profile"
          width="30px"
          height="30px"
        />
      </div>
    </div>
  )
}

export default UserNav
