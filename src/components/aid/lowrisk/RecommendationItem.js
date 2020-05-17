import React from "react"

function RecommendationItem(props) {
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
      className="recommendation-item"
    >
      <img src={props.image} alt="recomm" />
      <div>
        <h4 style={props.theme === true ? darkText : null}>{props.title}</h4>
        <p style={props.theme === true ? darkSecondaryText : null}>
          {props.content}
        </p>
      </div>
    </div>
  )
}

export default RecommendationItem
