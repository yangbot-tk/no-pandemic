import React from "react"

function CanadaItem(props) {
  return (
    <div className="canada-item">
      <h3>{props.text}</h3>
      <h4>{props.number}</h4>
    </div>
  )
}

export default CanadaItem
