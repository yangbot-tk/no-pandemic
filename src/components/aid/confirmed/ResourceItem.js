import React from "react"

function ResourceItem(props) {
  return (
    <div>
      <img
        src={props.resource.imgUrl}
        width="200px"
        height="200px"
        alt="resource-item"
      />
      <p>{props.resource.name}</p>
    </div>
  )
}

export default ResourceItem
