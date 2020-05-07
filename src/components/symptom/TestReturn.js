import React from "react"
import ReturnItem from "./ReturnItem"

function WaitReturn() {
  return (
    <div className="symptom-return-container">
      <div>
        <h2>We recommend you conduct a test </h2>
        <p>
          Based on your information and risk level, our physicians recommend you
          conduct a test
        </p>

        <div className="return-item-container">
          <ReturnItem
            title="Find Test Center"
            info="Contact doctors if you are recovered or have serve symptoms"
            imgUrl="/images/search.png"
          />
          <ReturnItem
            title="Testing FAQ"
            info="Checkout our FAQ before coming to the tesing center"
            imgUrl="/images/faq.png"
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
