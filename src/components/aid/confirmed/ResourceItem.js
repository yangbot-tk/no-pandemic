import React from "react"
import QtyBtn from "./QtyBtn"

function ResourceItem(props) {
  const darkSurface = {
    backgroundColor: "#333",
  }

  const darkText = {
    color: "white",
  }

  const darkSecondaryText = {
    color: "rgba(255, 255, 255, 0.5)",
  }

  const darkInput = {
    backgroundColor: "rgba(0, 0, 0 ,0)",
  }

  return (
    <div
      style={props.theme === true ? darkSurface : null}
      className="resource-item"
    >
      <div>
        <img src={props.resource.imgUrl} alt="resource-item" />
      </div>
      <p style={props.theme === true ? darkSecondaryText : null}>
        {props.resource.category === "health"
          ? "Health"
          : props.resource.category === "food"
          ? "Food"
          : null}
      </p>
      <h4 style={props.theme === true ? darkText : null}>
        {props.resource.name}
      </h4>
      <QtyBtn theme={props.theme} />
    </div>
  )
}

export default ResourceItem
