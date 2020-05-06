import React from "react"
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
