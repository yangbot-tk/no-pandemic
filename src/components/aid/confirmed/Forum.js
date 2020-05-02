import React from "react"
import ForumItem from "./ForumItem"

function Forum() {
  return (
    <div className="forum-container">
      <h2>Forum</h2>
      <div className="forum-item-container">
        <ForumItem
          info="The official channel for helping elder people"
          imgUrl="/images/elder.jpg"
          title="Elder Help"
          member={(23, 123)}
        />
        <ForumItem
          info="The official channel for helping student"
          imgUrl="/images/student.jpg"
          title="Student Help"
          member={(123, 343)}
        />
        <ForumItem
          info="The official channel for helping workers"
          imgUrl="/images/worker.jpg"
          title="Employee Help"
          member={(534, 443)}
        />
      </div>
    </div>
  )
}

export default Forum
