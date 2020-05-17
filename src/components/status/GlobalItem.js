import React from "react"

function GlobalItem(props) {
  const darkText = {
    color: "white",
  }
  return (
    <div className="global-item" style={props.theme === true ? darkText : null}>
      <h4>
        <i className="fas fa-long-arrow-alt-up"></i>
        {props.dailyNum}
      </h4>
      <p>{props.text}</p>
      <h3>{props.number}</h3>
    </div>
  )
}

export default GlobalItem
