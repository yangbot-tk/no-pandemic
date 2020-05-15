import React, { useState } from "react"
import { Link } from "react-router-dom"
import ReturnItem from "./ReturnItem"
import TestCenterMap from "./TestCenterMap"
import FAQ from "./FAQ"

function WaitReturn() {
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

  return (
    <div>
      {map === true ? (
        <div className="preventation-modal">
          <div className="modal-btn">
            <button onClick={offMap}>Close</button>
          </div>
          <TestCenterMap />
        </div>
      ) : null}

      {faq === true ? (
        <div className="preventation-modal">
          <div className="faq-container">
            <FAQ />
            <button onClick={offFaq}>Back</button>
          </div>
        </div>
      ) : null}
      <div className="symptom-return-container">
        <div className="symptom-return-alert">
          <img src="/images/success.png" alt="alert" />
          <div>
            <h2>We recommend you conduct a test</h2>
            <p>
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
            />
          </div>
          <div onClick={showFaq}>
            <ReturnItem
              title="Testing FAQ"
              info="Checkout our FAQ before coming to the tesing center"
              imgUrl="/images/faq.png"
            />
          </div>
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

export default WaitReturn
