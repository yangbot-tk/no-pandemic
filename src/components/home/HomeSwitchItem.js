import React from "react"

function HomeSwitchItem(props) {
  return (
    <div className="home-switch-item">
      <i className={props.icon}></i>
      <p>{props.text}</p>
    </div>
  )
}

export default HomeSwitchItem
