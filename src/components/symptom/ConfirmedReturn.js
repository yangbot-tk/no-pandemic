import React from "react"
import { Link } from "react-router-dom"
import ReturnItem from "./ReturnItem"

function ConfirmedReturn() {
  return (
    <div className="symptom-return-container">
      <div>
        <h2>We confirmed you as COVID-19</h2>
        <p>
          You can not change your symptom information by yourself at the moment.
        </p>

        <div className="return-item-container">
          <ReturnItem
            title="Contact Doctors"
            info="Contact doctors if you are recovered or have serve symptoms"
            imgUrl="/images/doctor.png"
          />
          <ReturnItem
            title="Call Us"
            info="Call us if you have further question for test result"
            imgUrl="/images/stream.png"
          />
          <ReturnItem
            title="Aid"
            info="Please checkout the resource package we provided for you"
            imgUrl="/images/formaid.png"
          />
        </div>
      </div>
    </div>
  )
}

export default ConfirmedReturn
