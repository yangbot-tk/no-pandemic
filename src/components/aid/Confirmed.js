import React, { useState } from "react"
import Header from "./aiditem/Header"
import Help from "./confirmed/Help"
import Resource from "./confirmed/Resource"
import Forum from "./confirmed/Forum"
import ReadMore from "./aiditem/ReadMore"
import NearMe from "../symptom/NearMe"

function Confirmed(props) {
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
          <NearMe theme={props.theme} />
        </div>
      ) : null}

      <div className="highrisk-header">
        <Header />
        <div className="header-sidebar">
          <Help
            theme={props.theme}
            title="FUND APPLY"
            imgUrl="/images/fund.png"
            info="Complete the emergency fund application"
          />

          <div onClick={showDoctor}>
            <Help
              theme={props.theme}
              title="DOCTOR HELP"
              imgUrl="/images/doctor.png"
              info="Contact to your local doctors with easy steps"
            />
          </div>
        </div>
      </div>

      <div className="flex-container">
        <Resource theme={props.theme} />
        <Forum theme={props.theme} />
      </div>

      <ReadMore />
    </div>
  )
}

export default Confirmed
