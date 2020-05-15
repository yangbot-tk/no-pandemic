import React, { useState } from "react"
import { Link } from "react-router-dom"
import ReturnItem from "./ReturnItem"
import NearMe from "./NearMe"

function ConfirmedReturn() {
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
          <NearMe />
          <div className="modal-btn">
            <button onClick={offDoctor}>Close</button>
          </div>
        </div>
      ) : null}
      <div className="symptom-return-container">
        <div className="symptom-return-alert">
          <img src="/images/success.png" alt="alert" />
          <div>
            <h2>Your COVID-19 test result is positive</h2>
            <p>
              You can not change your symptom information by yourself at the
              moment.
            </p>
          </div>
        </div>

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
  )
}

export default ConfirmedReturn
