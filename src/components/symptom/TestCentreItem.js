import React from "react"

function TestCentreItem(props) {
  return (
    <div className="nearme-list-item">
      <h4>{props.name}</h4>
      <p>{props.phone}</p>
      <p>{props.location}</p>
    </div>
  )
}

export default TestCentreItem
