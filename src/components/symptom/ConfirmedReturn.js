import React, { useState } from "react"
import { Link } from "react-router-dom"
import ReturnItem from "./ReturnItem"
import NearMeMap from "./NearMeMap"

function ConfirmedReturn() {
  const [doctor, setDoctor] = useState(true)

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
          <div className="doctor-nearme-container">
            <NearMeMap />
            <div>
              <p>测试</p>
            </div>
            {/* <button onClick={offDoctor}>Back</button> */}
          </div>
        </div>
      ) : null}
      <div className="symptom-return-container">
        <div>
          <h2>We confirmed you as COVID-19</h2>
          <p>
            You can not change your symptom information by yourself at the
            moment.
          </p>

          <div className="return-item-container">
            <div onClick={showDoctor}>
              <ReturnItem
                title="Contact Doctors"
                info="Contact doctors if you are recovered or have serve symptoms"
                imgUrl="/images/doctor.png"
              />
            </div>
            <a href="tel:1-833-966-2099">
              <ReturnItem
                title="Call Us"
                info="Call us if you have further question for test result"
                imgUrl="/images/stream.png"
              />
            </a>
            <Link to="/signin/aid">
              <ReturnItem
                title="Aid"
                info="Please checkout the resource package we provided for you"
                imgUrl="/images/formaid.png"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmedReturn
