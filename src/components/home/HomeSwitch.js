import React from "react"
import HomeSwitchItem from "./HomeSwitchItem"

function HomeSwitch() {
  return (
    <div className="home-switch-content">
      <div className="home-switch-item-container">
        <HomeSwitchItem icon="fas fa-map-marker-alt" text="5109 Irmin St" />
        <HomeSwitchItem icon="fas fa-home" text="Home" />
        <HomeSwitchItem icon="fas fa-school" text="School" />
        <HomeSwitchItem icon="fas fa-building" text="Work" />
      </div>
    </div>
  )
}

export default HomeSwitch
