import React, { useState } from "react"
import Header from "./aiditem/Header"
import Isolation from "./highrisk/Isolation"
import Help from "./confirmed/Help"
import Exposure from "./highrisk/Exposure"
import ReadMore from "./aiditem/ReadMore"
import NearMe from "../symptom/NearMe"

function HighRisk(props) {
  const [doctor, setDoctor] = useState(false)
  function showDoctor() {
    setDoctor(true)
  }

  function offDoctor() {
    setDoctor(false)
  }

  return (
    <div>
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
          <div onClick={showDoctor}>
            <Help
              title="FIND DOCTOR"
              imgUrl="/images/doctor.png"
              info="Contact to your local doctors with easy steps"
              theme={props.theme}
            />
          </div>
          <div>
            <a href="tel:1-833-966-2099">
              <Help
                title="CALL US"
                imgUrl="/images/stream.png"
                info="Contact us with videoes if you have any questions"
                theme={props.theme}
              />
            </a>
          </div>
        </div>
      </div>
      <Isolation theme={props.theme} />

      <Exposure theme={props.theme} />

      <ReadMore />
    </div>
  )
}
export default HighRisk
