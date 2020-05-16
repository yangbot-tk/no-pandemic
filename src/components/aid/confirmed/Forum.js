import React from "react"
import ForumItem from "./ForumItem"

function Forum() {
  return (
    <div className="forum-container">
      <div className="confirm-module-header">
        <h3 className="module-title">Resources</h3>
        <p>Checkout how you can get help from public organization</p>
      </div>
      <div className="forum-item-container">
        <ForumItem
          imgUrl="/images/elder.jpg"
          title="Elder Help"
          info="The official channel for helping elder people"
          member={43002}
        />
        <ForumItem
          imgUrl="/images/student.jpg"
          title="Student Help"
          info="The official channel for helping studnet"
          member={13002}
        />
        <ForumItem
          imgUrl="/images/worker.jpg"
          title="Employee Help"
          info="The official channel for helping employee"
          member={32002}
        />
      </div>
    </div>
  )
}

export default Forum
