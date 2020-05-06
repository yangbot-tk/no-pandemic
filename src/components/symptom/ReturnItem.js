import React from "react"

function ReturnItem(props) {
  return (
    <div className="return-item">
      <h3>{props.title}</h3>
      <img src={props.imgUrl} alt="symptom module" />
      <p>{props.info}</p>
    </div>
  )
}

export default ReturnItem
