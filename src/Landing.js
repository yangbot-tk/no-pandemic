import React from "react"
import Header from "./components/landing/Header"
import Product from "./components/landing/Product"
import Feature from "./components/landing/Feature"
import Flow from "./components/landing/Flow"
import Team from "./components/landing/Team"
import Sponsor from "./components/landing/Sponsor"
import Footer from "./components/landing/Footer"

function Landing() {
  return (
    <div>
      <Header />
      <Flow />
      <Product />
      <Feature />

      <Team />
      <Sponsor />
      <Footer />
    </div>
  )
}

export default Landing
