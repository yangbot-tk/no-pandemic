import React from "react"

function SpreadItem(props) {
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
      className="spread-item"
    >
      <img src={props.image} alt="spread" />
      <h4 style={props.theme === true ? darkText : null}>{props.title}</h4>
      <p style={props.theme === true ? darkSecondaryText : null}>
        {props.content}
      </p>
    </div>
  )
}

export default SpreadItem
