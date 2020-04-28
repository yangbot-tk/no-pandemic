import React from "react"

function GlobalItem(props) {
  return (
    <div className="global-item">
      <p>
        <i className="fas fa-long-arrow-alt-up"></i>
        {props.dailyNum}
      </p>
      <h3>{props.text}</h3>
      <h4>{props.number}</h4>
    </div>
  )
}

export default GlobalItem
