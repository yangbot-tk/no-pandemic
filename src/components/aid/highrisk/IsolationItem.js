import React from "react"

function IsolationItem(props) {
  return (
    <div className="isolation-item">
      <img src={props.imgUrl} alt="stay home" width="100px" height="100px" />
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <button>Read more</button>
    </div>
  )
}

export default IsolationItem
