import React, { useState } from "react"
import { Link } from "react-router-dom"
import ReturnItem from "./ReturnItem"
import TestCenterMap from "./TestCenterMap"
import FAQ from "./FAQ"

function WaitReturn(props) {
  const [map, setMap] = useState(false)
  const [faq, setFaq] = useState(false)
  function showMap() {
    setMap(true)
  }

  function offMap() {
    setMap(false)
  }

  function showFaq() {
    setFaq(true)
  }

  function offFaq() {
    setFaq(false)
  }
  const darkText = {
    color: "white",
  }

  const darkBackground = {
    backgroundColor: "#121212",
    border: "1px solid #333",
  }

  const darkSurface = {
    backgroundColor: "#333",
  }
  const darkInput = {
    backgroundColor: "rgba(0, 0, 0 ,0)",
  }

  const darkSecondaryText = {
    color: "rgba(255, 255, 255, 0.5)",
  }

  return (
    <div>
      {map === true ? (
        <div className="preventation-modal">
          <div className="modal-btn">
            <button
              style={props.theme === true ? darkInput : null}
              onClick={offMap}
            >
              Close
            </button>
          </div>
          <TestCenterMap theme={props.theme} />
        </div>
      ) : null}

      {faq === true ? (
        <div
          style={props.theme === true ? darkBackground : null}
          className="preventation-modal"
        >
          <div className="faq-container">
            <FAQ theme={props.theme} />
            <button
              style={props.theme === true ? darkInput : null}
              onClick={offFaq}
            >
              Back
            </button>
          </div>
        </div>
      ) : null}
      <div className="symptom-return-container">
        <div
          style={props.theme === true ? darkSurface : null}
          className="symptom-return-alert"
        >
          <img src="/images/test.png" alt="alert" />
          <div>
            <h2 style={props.theme === true ? darkText : null}>
              We recommend you conduct a test
            </h2>
            <p style={props.theme === true ? darkSecondaryText : null}>
              Based on your information and risk level, our physicians recommend
              you conduct a test
            </p>
          </div>
        </div>

        <div className="return-item-container">
          <div onClick={showMap}>
            <ReturnItem
              title="Find Test Center"
              info="Contact doctors if you are recovered or have serve symptoms"
              imgUrl="/images/search.png"
              theme={props.theme}
            />
          </div>
          <div onClick={showFaq}>
            <ReturnItem
              title="Testing FAQ"
              info="Checkout our FAQ before coming to the tesing center"
              imgUrl="/images/faq.png"
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
