import React from "react"

function PreventItem(props) {
  return (
    <div className="prevent-item">
      <img src={props.image} alt="service" />
      <div>
        <h4>{props.title}</h4>
        <p>{props.info}</p>
      </div>
    </div>
  )
}

export default PreventItem
