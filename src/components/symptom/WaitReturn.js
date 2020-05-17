import React, { useState } from "react"
import { Link } from "react-router-dom"
import ReturnItem from "./ReturnItem"
import IsolationSlide from "./IsolationSlide"

function WaitReturn(props) {
  const darkBackground = {
    backgroundColor: "#121212",
  }

  const darkSurface = {
    backgroundColor: "#333",
  }

  const darkText = {
    color: "white",
  }

  const darkSecondaryText = {
    color: "rgba(255, 255, 255, 0.5)",
  }

  const darkInput = {
    backgroundColor: "rgba(0, 0, 0 ,0)",
    color: "white",
  }

  const [manual, setManual] = useState(false)
  function showInstruction() {
    setManual(true)
  }

  function offInstruction() {
    setManual(false)
  }

  return (
    <div>
      {manual === true ? (
        <IsolationSlide theme={props.theme} offToggle={offInstruction} />
      ) : null}

      <div className="symptom-return-container">
        <div
          style={props.theme === true ? darkSurface : null}
          className="symptom-return-alert"
        >
          <img src="/images/wait.png" alt="alert" />
          <div>
            <h2 style={props.theme === true ? darkText : null}>
              Please wait for your test results
            </h2>
            <p style={props.theme === true ? darkSecondaryText : null}>
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
