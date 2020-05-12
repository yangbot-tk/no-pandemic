import React from "react"

function HomeFeatureItem(props) {
  return (
    <div className="home-feature-item">
      <img width="50px" height="auto" src={props.imgUrl} alt="steet" />
      <p>{props.title}</p>
    </div>
  )
}

export default HomeFeatureItem
