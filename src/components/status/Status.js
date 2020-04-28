import React from "react"
import Global from "./Global"
import Canada from "./Canada"
import CovMap from "./CovMap"

function Status() {
  return (
    <div className="main-container">
      <h1>Status Board</h1>
      <div className="content-container">
        <div className="status-container">
          <Canada />
          <CovMap />
          <Global />
        </div>
      </div>
    </div>
  )
}
export default Status
