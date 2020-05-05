import React from "react"
import Global from "./Global"
import Canada from "./Canada"
import CovMap from "./CovMap"
import News from "./News"
import UserNav from "../UserNav"

function Status() {
  return (
    <div className="main-container">
      <UserNav title="Status Dashboard" />
      <div className="status-container">
        <div className="status-main">
          <Canada />
          <CovMap />
          <News />
          <Global />
        </div>
      </div>
    </div>
  )
}
export default Status
