import React from "react"

function CanadaItem(props) {
  return (
    <div className="canada-item">
      <i className={props.iconPath}></i>

      <div>
        <p>{props.text}</p>
        <h3>{props.number}</h3>
      </div>
    </div>
  )
}

export default CanadaItem
