import React, { useState } from "react"
import { Link } from "react-router-dom"
import ReturnItem from "./ReturnItem"
import IsolationSlide from "./IsolationSlide"

function WaitReturn(props) {
  const [manual, setManual] = useState(false)
  function showInstruction() {
    setManual(true)
  }

  function offInstruction() {
    setManual(false)
  }

  return (
    <div>
      {manual === true ? <IsolationSlide offToggle={offInstruction} /> : null}

      <div className="symptom-return-container">
        <div className="symptom-return-alert">
          <img src="/images/wait.png" alt="alert" />
          <div>
            <h2 style={{ color: "rgb(6, 76, 106)" }}>
              Please wait for your test results
            </h2>
            <p>
              We received your test samples, please allows 48 - 72 hours for
              response
            </p>
          </div>
        </div>

        <div className="return-item-container">
          <a href="tel:1-833-966-2099">
            <ReturnItem
              title="Call Us"
              info="Call us if you have further question about the test"
              imgUrl="/images/stream.png"
              theme={props.theme}
            />
          </a>
          <div onClick={showInstruction}>
            <ReturnItem
              title="Isolation Instruction"
              info="Contact doctors if you are recovered or have serve symptoms"
              imgUrl="/images/instruction.png"
              theme={props.theme}
            />
          </div>

          <Link to="/signin/aid">
            <ReturnItem
              title="Aid"
              info="Please checkout the resource package we provided for you"
              imgUrl="/images/formaid.png"
              theme={props.theme}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default WaitReturn
