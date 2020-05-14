import React from "react"
import Header from "./components/landing/Header"
import Product from "./components/landing/Product"
import Feature from "./components/landing/Feature"
import Flow from "./components/landing/Flow"
import HomeFeature from "./components/landing/HomeFeature"
import Team from "./components/landing/Team"
import Sponsor from "./components/landing/Sponsor"
import Footer from "./components/landing/Footer"
import FormFeature from "./components/landing/FormFeature"

function Landing() {
  return (
    <div>
      <Header />
      <Flow />
      <Product />
      <Feature />
      <HomeFeature />
      <FormFeature />
      <Team />
      <Sponsor />
      <Footer />
    </div>
  )
}

export default Landing
