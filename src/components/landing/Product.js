import React from "react"

function Product() {
  return (
    <div className="product-container">
      <div className="product-container module-layout">
        <div>
          <h1>About NoPandemic</h1>
          <p>
            Due the the current COVID19 epidemic, our life are dramatically
            changed in respect to school, work and everything. There are many
            information and app online related to COVID-19.
          </p>
          <p>
            However, our team would like to develop an app which not only help
            user tracks the covid-19 person around the local area, but more acts
            as an platform which collecting all the information you need to know
            regarding covid-19.
          </p>
          <button>Get start</button>
        </div>
        <img src="images/people.jpg" alt="banner" />
      </div>
      <img className="wave-2" src="images/wave-2.png" alt="error" />
    </div>
  )
}

export default Product
