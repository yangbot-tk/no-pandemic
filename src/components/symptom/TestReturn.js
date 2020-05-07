import React, { useState } from "react"
import { Link } from "react-router-dom"
import ReturnItem from "./ReturnItem"
import TestCenterMap from "./TestCenterMap"

function WaitReturn() {
  const [map, setMap] = useState(false)

  function showMap() {
    setMap(true)
  }

  function offMap() {
    setMap(false)
  }

  return (
    <div>
      {map === true ? (
        <div className="preventation-modal">
          <TestCenterMap />
          <button onClick={offMap}>Back</button>
        </div>
      ) : null}
      <div className="symptom-return-container">
        <div>
          <h2>We recommend you conduct a test </h2>
          <p>
            Based on your information and risk level, our physicians recommend
            you conduct a test
          </p>

          <div className="return-item-container">
            <div onClick={showMap}>
              <ReturnItem
                title="Find Test Center"
                info="Contact doctors if you are recovered or have serve symptoms"
                imgUrl="/images/search.png"
              />
            </div>
            <ReturnItem
              title="Testing FAQ"
              info="Checkout our FAQ before coming to the tesing center"
              imgUrl="/images/faq.png"
            />
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

export default WaitReturn
