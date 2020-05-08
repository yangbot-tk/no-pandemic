import React from "react"
import SocialMedia from "./SocialMedia"

function TeamItem(props) {
  return (
    <div className="team-item">
      <div>
        <h3>{props.name}</h3>
        <p>
          <i className="fas fa-location-arrow"></i>
          {props.address}
        </p>
        <p>
          <i className="fas fa-building"></i>
          {props.job}
        </p>
        <p>
          <i className="fas fa-envelope"></i>
          {props.email}
        </p>
        <SocialMedia />
        <h4>{props.role}</h4>
      </div>
      <img src={props.profile} alt="team-mate" />
    </div>
  )
}

export default TeamItem
