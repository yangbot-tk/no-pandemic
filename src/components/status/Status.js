import React from "react"
import Global from "./Global"
import Canada from "./Canada"
import CovMap from "./CovMap"
import News from "./News"

function Status() {
  return (
    <div className="main-container">
      <h1>Status Board</h1>
      <div className="content-container">
        <div className="status-container">
          <div className="status-main">
            <Canada />
            <CovMap />
            <News />
          </div>
          <Global />
        </div>
      </div>
    </div>
  )
}
export default Status
