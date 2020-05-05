import React from "react"
import Header from "./aiditem/Header"
import Isolation from "./highrisk/Isolation"
import Help from "./confirmed/Help"
import Exposure from "./highrisk/Exposure"
import ReadMore from "./aiditem/ReadMore"

function HighRisk() {
  return (
    <div>
      <div className="highrisk-header">
        <Header />
        <div className="header-sidebar">
          <Help
            title="Doctor Help"
            imgUrl="/images/doctor.png"
            info="Contact to your local doctors with easy steps"
          />
          <Help
            title="Doctor Help"
            imgUrl="/images/stream.png"
            info="Contact to your local doctors with easy steps"
          />
        </div>
      </div>
      <Isolation />

      <Exposure />

      <ReadMore />
    </div>
  )
}
export default HighRisk
