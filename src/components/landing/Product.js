import React from "react"

function Product() {
  return (
    <div className="product-container">
      <div className="product-container module-layout">
        <div>
          <h1>About NoPandemic</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
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
