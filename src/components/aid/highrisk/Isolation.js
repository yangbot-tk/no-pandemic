import React from "react"
import IsolationItem from "./IsolationItem"

function Isolation() {
  return (
    <div className="isolation-container">
      <IsolationItem
        title="Limit contact with others"
        content="Do not leave home unless it’s to seek medical care"
        imgUrl="/images/isolation/stayhome.png"
      />
      <IsolationItem
        title="Keep your hands clean"
        content="Wash your hands often with soap at least 20 seconds"
        imgUrl="/images/isolation/handwash.png"
      />
      <IsolationItem
        title="Avoid contaminating"
        content="Clean and disinfect surfaces that you touch often"
        imgUrl="/images/isolation/coronavirus.png"
      />
      <IsolationItem
        title="Care for yourself"
        content="Monitor your symptoms carefully as directed by Provincial Health"
        imgUrl="/images/isolation/fever.png"
      />
      <IsolationItem
        title="Supplies to have at home"
        content="Medical masks if available in case"
        imgUrl="/images/isolation/care.png"
      />
    </div>
  )
}

export default Isolation
