import React, { useState } from "react"
import Header from "./aiditem/Header"
import Help from "./confirmed/Help"
import Resource from "./confirmed/Resource"
import Forum from "./confirmed/Forum"
import ReadMore from "./aiditem/ReadMore"
import NearMe from "../symptom/NearMe"

function Confirmed() {
  const [doctor, setDoctor] = useState(false)
  function showDoctor() {
    setDoctor(true)
  }

  function offDoctor() {
    setDoctor(false)
  }

  return (
    <div className="confirmed-container">
      {doctor === true ? (
        <div className="preventation-modal">
          <div className="modal-btn">
            <button onClick={offDoctor}>Close</button>
          </div>
          <NearMe />
        </div>
      ) : null}

      <div className="highrisk-header">
        <Header />
        <div className="header-sidebar">
          <Help
            title="Fund Apply"
            imgUrl="/images/fund.png"
            info="Complete the emergency fund application"
          />

          <div onClick={showDoctor}>
            <Help
              title="Doctor Help"
              imgUrl="/images/doctor.png"
              info="Contact to your local doctors with easy steps"
            />
          </div>
        </div>
      </div>

      <div className="flex-container">
        <Resource />
        <Forum />
      </div>

      <ReadMore />
    </div>
  )
}

export default Confirmed
