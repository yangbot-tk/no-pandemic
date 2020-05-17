import React from "react"

function HomeSwitchItem(props) {
  const darkText = {
    color: "white",
  }

  return (
    <div className="home-switch-item">
      <i
        style={props.theme === true ? darkText : null}
        className={props.icon}
      ></i>
      <p>{props.text}</p>
    </div>
  )
}

export default HomeSwitchItem
