import React from "react"
import Header from "./aiditem/Header"
import Spread from "./lowrisk/Spread"
import Preventation from "./lowrisk/Preventation"
import Recommendation from "./lowrisk/Recommendation"
function LowRisk() {
  return (
    <div className="lowrisk-container">
      <div>
        <Header />
        <Spread />
        <Preventation />
      </div>
      <Recommendation />
    </div>
  )
}
export default LowRisk
