import React from "react"
import SocialMedia from "./SocialMedia"

function TeamItem(props) {
  return (
    <div className="team-item">
      <div>
        <h3>{props.name}</h3>
        <p>
          <i className="fas fa-location-arrow"></i>Burnaby, BC
        </p>
        <p>
          <i className="fas fa-building"></i>BCIT Term 2
        </p>
        <p>
          <i className="fas fa-envelope"></i>liyang0525.ly@gmail.com
        </p>
        <SocialMedia />
        <h4>{props.role}</h4>
      </div>
      <img src={props.profile} alt="team-mate" />
    </div>
  )
}

export default TeamItem
