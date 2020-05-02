import React from "react"

function FourmItem(props) {
  return (
    <div className="forum-item">
      <img src={props.imgUrl} alt="forum" />
      <div>
        <h4>{props.title}</h4>
        <p>{props.info}</p>
        <p>{props.member} members</p>
      </div>
    </div>
  )
}

export default FourmItem
