import React from "react"

function PreventItem(props) {
  const darkSurface = {
    backgroundColor: "#333",
    boxShadow: "none",
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
      className="prevent-item"
    >
      <img src={props.image} alt="service" />
      <div>
        <h4 style={props.theme === true ? darkText : null}>{props.title}</h4>
        <p style={props.theme === true ? darkSecondaryText : null}>
          {props.info}
        </p>
      </div>
    </div>
  )
}

export default PreventItem
