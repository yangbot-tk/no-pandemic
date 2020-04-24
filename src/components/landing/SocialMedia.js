import React from "react"
import SocialMediaItem from "./SocialMediaItem"

function SocialMedia() {
  return (
    <div className="intro-sc-icon">
      <SocialMediaItem
        url="https://steamcommunity.com/id/05250254/"
        icon="fab fa-steam"
      />
      <SocialMediaItem
        url="https://www.instagram.com/yang05_li/?hl=en"
        icon="fab fa-instagram"
      />
      <SocialMediaItem
        url="https://github.com/yang052513"
        icon="fab fa-github"
      />
      <SocialMediaItem
        url="https://www.linkedin.com/in/yangliWeb"
        icon="fab fa-linkedin"
      />
    </div>
  )
}
export default SocialMedia
