import React from "react"
import ForumItem from "./ForumItem"

function Forum(props) {
  const darkText = {
    color: "white",
  }

  const darkSecondaryText = {
    color: "rgba(255, 255, 255, 0.5)",
  }

  return (
    <div className="forum-container">
      <div className="confirm-module-header">
        <h3
          style={props.theme === true ? darkText : null}
          className="module-title"
        >
          Resources
        </h3>
        <p style={props.theme === true ? darkSecondaryText : null}>
          Checkout how you can get help from public organization
        </p>
      </div>
      <div className="forum-item-container">
        <ForumItem
          imgUrl="/images/elder.jpg"
          title="Elder Help"
          info="The official channel for helping elder people"
          member={43002}
          theme={props.theme}
        />
        <ForumItem
          imgUrl="/images/student.jpg"
          title="Student Help"
          info="The official channel for helping studnet"
          member={13002}
          theme={props.theme}
        />
        <ForumItem
          imgUrl="/images/worker.jpg"
          title="Employee Help"
          info="The official channel for helping employee"
          member={32002}
          theme={props.theme}
        />
      </div>
    </div>
  )
}

export default Forum
