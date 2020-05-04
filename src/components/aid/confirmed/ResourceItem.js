import React from "react"
import QtyBtn from "./QtyBtn"

function ResourceItem(props) {
  return (
    <div className="resource-item">
      <div>
        <img src={props.resource.imgUrl} alt="resource-item" />
      </div>
      <p>Health</p>
      <h4>{props.resource.name}</h4>
      <QtyBtn />
    </div>
  )
}

export default ResourceItem
