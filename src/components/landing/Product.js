import React from "react"
import { Link } from "react-router-dom"

function Product() {
  return (
    <div className="product-container">
      <div className="product-container module-layout">
        <div data-aos="fade-up">
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
          <Link to="/signin">
            <button>Get start</button>
          </Link>
        </div>
        <img data-aos="fade-up" src="images/people.jpg" alt="banner" />
        {/* <iframe width="600" height="400" src="https://www.youtube.com/embed/EfFXwVA-2EQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      </div>
      <img
        data-aos="fade-up"
        className="wave-2"
        src="images/wave-2.png"
        alt="error"
      />
    </div>
  )
}

export default Product
