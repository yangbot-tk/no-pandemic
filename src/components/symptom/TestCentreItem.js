import React from "react"

function TestCentreItem(props) {
  const darkSurface = {
    backgroundColor: "#333",
  }

  const darkText = {
    color: "white",
  }

  const darkSecondaryText = {
    color: "rgba(255, 255, 255, 0.5)",
  }

  return (
    <div
      style={props.theme === true ? darkSurface : null}
      className="nearme-list-item"
    >
      <h4 style={props.theme === true ? darkText : null}>{props.name}</h4>
      <p style={props.theme === true ? darkSecondaryText : null}>
        {props.phone}
      </p>
      <p style={props.theme === true ? darkSecondaryText : null}>
        {props.location}
      </p>
    </div>
  )
}

export default TestCentreItem
