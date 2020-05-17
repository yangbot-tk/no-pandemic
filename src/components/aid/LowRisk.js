import React from "react"
import Header from "./aiditem/Header"
import Spread from "./lowrisk/Spread"
import Preventation from "./lowrisk/Preventation"
import Recommendation from "./lowrisk/Recommendation"
import ReadMore from "./aiditem/ReadMore"

function LowRisk(props) {
  return (
    <div>
      <div className="lowrisk-container">
        <div>
          <Header />
          <Spread theme={props.theme} />
          <Preventation theme={props.theme} />
        </div>
        <Recommendation theme={props.theme} />
      </div>
      <ReadMore />
    </div>
  )
}
export default LowRisk
