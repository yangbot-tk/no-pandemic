import React from "react"

function CanadaItem(props) {
  const confirmColor = "rgb(148, 79, 208)"
  const recoverColor = "rgb(79, 208, 90)"
  const deathColor = "rgb(208, 79, 79)"
  let colorStyle
  let borderTop

  const darkSurface = {
    backgroundColor: "#333",
  }

  const darkText = {
    color: "white",
  }

  if (props.text === "Confirmed") {
    colorStyle = { color: confirmColor }
    borderTop = { borderTop: `3px solid ${confirmColor}` }
  } else if (props.text === "Recovered") {
    colorStyle = { color: recoverColor }
    borderTop = { borderTop: `3px solid ${recoverColor}` }
  } else if (props.text === "Deaths") {
    colorStyle = { color: deathColor }
    borderTop = { borderTop: `3px solid ${deathColor}` }
  }

  return (
    <div
      style={props.theme === true ? darkSurface : null}
      className="canada-item"
    >
      <i style={colorStyle} className={props.iconPath}></i>

      <div>
        <p style={props.theme === true ? darkText : null}>{props.text}</p>
        <h3 style={colorStyle}>{props.number}</h3>
      </div>
    </div>
  )
}

export default CanadaItem
