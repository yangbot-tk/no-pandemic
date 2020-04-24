import React from "react"
import TeamItem from "./TeamItem"
function Team() {
  return (
    <div className="team-container">
      <h1>Our Team</h1>
      <div className="team-item-container">
        <TeamItem
          name="Yang Li"
          role="Front-end Developer"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
        />
        <TeamItem
          name="Wenbo Ji"
          role="Back-end Developer"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
        />
        <TeamItem
          name="Ben Jones"
          role="Back-end Developer"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
        />
        <TeamItem
          name="Ian Snider"
          role="Project Manager"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  )
}

export default Team
