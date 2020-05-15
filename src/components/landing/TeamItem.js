import React from "react"
import SocialMedia from "./SocialMedia"

function TeamItem(props) {
  return (
    <div data-aos="fade-up" className="team-item">
      <img src={props.profile} alt="team-mate" />
      <div className="team-item-text">
        <h3>{props.name}</h3>
        <div className="team-item-text-container">
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
        </div>
        <SocialMedia />
        <h4>{props.role}</h4>
      </div>
    </div>
  )
}

export default TeamItem
