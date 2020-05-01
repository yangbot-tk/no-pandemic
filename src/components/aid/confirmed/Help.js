import React from "react"

function Help(props) {
  return (
    <div className="help-container">
      <h3>{props.title}</h3>
      <img src={props.imgUrl} alt="imdaa" />
      <p>{props.info}</p>
    </div>
  )
}

export default Help
