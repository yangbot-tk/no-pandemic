import React from "react"
import { Link } from "react-router-dom"
import ReturnItem from "./ReturnItem"

function WaitReturn() {
  return (
    <div className="symptom-return-container">
      <div>
        <h2>Please wait for your test results</h2>
        <p>
          We received your test samples, please allows 48 - 72 hours for
          response
        </p>

        <div className="return-item-container">
          <ReturnItem
            title="Isolation Instruction"
            info="Contact doctors if you are recovered or have serve symptoms"
            imgUrl="/images/instruction.png"
          />
          <ReturnItem
            title="Call Us"
            info="Call us if you have further question about the test"
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

export default WaitReturn
