import React from "react"

function SocialMediaItem(props) {
  return (
    <a className="btn" href={props.url}>
      <i className={props.icon}></i>
    </a>
  )
}
export default SocialMediaItem
