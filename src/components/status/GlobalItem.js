import React from "react"

function GlobalItem(props) {
  return (
    <div className="global-item">
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
