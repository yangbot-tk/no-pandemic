import React from "react"

function CovMap() {
  return (
    <div className="covmap-container">
      {/* <img src="/images/map.png" alt="cov map" width="820px" height="auto" /> */}
      <iframe
        src="https://experience.arcgis.com/experience/a6f23959a8b14bfa989e3cda29297ded"
        scrolling="no"
        frameborder="no"
      ></iframe>
    </div>
  )
}
export default CovMap
