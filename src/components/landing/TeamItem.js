import React from "react"
import SocialMedia from "./SocialMedia"

function TeamItem(props) {
  return (
    <div className="team-item">
      <img src="images/team/yang.jpg" />
      <h3>{props.name}</h3>
      <div>
        <p>
          <i class="fas fa-location-arrow"></i>Burnaby, BC
        </p>
        <p>
          <i class="fas fa-building"></i>BCIT Term 2
        </p>
        <p>
          <i class="fas fa-envelope"></i>liyang0525.ly@gmail.com
        </p>
      </div>
      <SocialMedia />
      <h4>{props.role}</h4>
    </div>
  )
}

export default TeamItem
