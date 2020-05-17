import React from "react"

function NearMeItem(props) {
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
      <h4 style={props.theme === true ? darkText : null}>{props.place.name}</h4>
      <p style={props.theme === true ? darkSecondaryText : null}>
        Rating: {props.place.rating}/5 ({props.place.user_ratings_total})
      </p>
      <p style={props.theme === true ? darkSecondaryText : null}>
        {props.place.vicinity}
      </p>
    </div>
  )
}

export default NearMeItem
