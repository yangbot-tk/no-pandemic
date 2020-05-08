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
          profile="images/team/yang.jpg"
          email="liyang0525.ly@gmail.com"
          job="BCIT Term 2"
          address="Burnaby, BC"
        />
        <TeamItem
          name="Wenbo Ji"
          role="Back-end Developer"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
          profile="images/team/wenbo.jpg"
          email="wenbojijack@gmail.com"
          job="BCIT Term 2"
          address="Vancouver, BC"
        />
        <TeamItem
          name="Ben Jones"
          role="Game Developer"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
          profile="images/team/ben.png"
          email="daffydbjones@gmail.com"
          job="BCIT Term 1"
          address="Burnaby, BC"
        />
        <TeamItem
          name="Ian Snider"
          role="Game Developer"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
          profile="images/team/ian.jpg"
          email="ian.g.snider@gmail.com"
          job="BCIT Term 1"
          address="Burnaby, BC"
        />
      </div>
    </div>
  )
}

export default Team
