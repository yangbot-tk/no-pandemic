import React from "react"

function ResourceItem(props) {
  return (
    <div>
      <img src={props.resource.imgUrl} alt="resource-item" />
      <p>{props.resource.name}</p>
    </div>
  )
}

export default ResourceItem
