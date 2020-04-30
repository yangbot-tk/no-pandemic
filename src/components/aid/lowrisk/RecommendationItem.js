import React from "react"

function RecommendationItem(props) {
  return (
    <div className="recommendation-item">
      <img src={props.image} alt="recomm" />
      <div>
        <h4>{props.title}</h4>
        <p>{props.content}</p>
      </div>
    </div>
  )
}

export default RecommendationItem
