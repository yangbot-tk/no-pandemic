import React from "react"
import Header from "./aiditem/Header"
import Spread from "./lowrisk/Spread"
import Preventation from "./lowrisk/Preventation"

function LowRisk() {
  return (
    <div>
      <Header />
      <Spread />
      <Preventation />
      <h2>Recommendation</h2>
      <p>血氧仪</p>
      <p>体温计</p>
      <p>一些治疗感冒的药</p>
    </div>
  )
}
export default LowRisk
