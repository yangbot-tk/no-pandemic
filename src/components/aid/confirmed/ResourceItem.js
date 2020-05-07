import React from "react"
import QtyBtn from "./QtyBtn"

function ResourceItem(props) {
  return (
    <div className="resource-item">
      <div>
        <img src={props.resource.imgUrl} alt="resource-item" />
      </div>
      <p>
        {props.resource.category === "health"
          ? "Health"
          : props.resource.category === "food"
          ? "Food"
          : null}
      </p>
      <h4>{props.resource.name}</h4>
      <QtyBtn />
    </div>
  )
}

export default ResourceItem
