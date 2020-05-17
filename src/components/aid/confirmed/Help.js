import React from "react"

const darkSurface = {
  backgroundColor: "#333",
}

const darkText = {
  color: "white",
}

const darkSecondaryText = {
  color: "rgba(255, 255, 255, 0.5)",
}

function Help(props) {
  return (
    <div
      style={props.theme === true ? darkSurface : null}
      className="help-container"
    >
      <h3 style={props.theme === true ? darkText : null}>{props.title}</h3>
      <img src={props.imgUrl} alt="imdaa" />
      <p style={props.theme === true ? darkSecondaryText : null}>
        {props.info}
      </p>
    </div>
  )
}

export default Help
