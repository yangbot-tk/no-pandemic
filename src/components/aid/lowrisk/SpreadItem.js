import React from "react"

function SpreadItem(props) {
  return (
    <div className="spread-item">
      <img src={props.image} alt="spread" />
      <h4>{props.title}</h4>
      <p>{props.content}</p>
    </div>
  )
}

export default SpreadItem
