import React from "react"

function NearMeItem(props) {
  return (
    <div className="nearme-list-item">
      <h4>{props.place.name}</h4>
      <p>
        Rating: {props.place.rating}/5 ({props.place.user_ratings_total})
      </p>
      <p>{props.place.vicinity}</p>
    </div>
  )
}

export default NearMeItem
