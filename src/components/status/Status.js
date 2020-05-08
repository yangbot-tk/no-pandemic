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
          <div className="status-left-container">
            <div className="status-top-container">
              <Canada />
              <CovMap />
            </div>
            <Global />
          </div>
          <News />
        </div>
      </div>
    </div>
  )
}
export default Status
