import React from "react"
import Header from "./aiditem/Header"
import Help from "./confirmed/Help"
import Resource from "./confirmed/Resource"
import Forum from "./confirmed/Forum"

function Confirmed() {
  return (
    <div className="confirmed-container">
      <div className="flex-container">
        <Header />
        <Help
          title="Fund Apply"
          imgUrl="/images/fund.png"
          info="Complete the emergency fund application"
        />
        <Help
          title="Doctor Help"
          imgUrl="/images/doctor.png"
          info="Contact to your local doctors with easy steps"
        />
      </div>
      <div className="flex-container">
        <Resource />

        <Forum />
      </div>
    </div>
  )
}

export default Confirmed
