import React from "react"

function HomeFeatureItem(props) {
  return (
    <div className="home-feature-item">
      <i className={props.icon}></i>
      <p>{props.title}</p>
    </div>
  )
}

export default HomeFeatureItem
