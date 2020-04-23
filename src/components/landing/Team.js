import React from "react"
import TeamItem from "./TeamItem"
function Team() {
  return (
    <div>
      <h1>Team</h1>
      <div className="team-item-container">
        <TeamItem />
        <TeamItem />
        <TeamItem />
        <TeamItem />
      </div>
    </div>
  )
}

export default Team
