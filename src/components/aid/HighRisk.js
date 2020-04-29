import React from "react"
import LocalContact from "./aiditem/LocalContact"
import Appointment from "./aiditem/Appointment"
import Resource from "./aiditem/Resource"
import Tips from "./aiditem/Tips"
import Fund from "./aiditem/Fund"
import Header from "./aiditem/Header"

function HighRisk() {
  return (
    <div>
      <Header />
      <LocalContact />
      <Appointment />
      <Fund />
      <Resource />
    </div>
  )
}
export default HighRisk
