import React from "react"
import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="showcase">
      <div className="header">
        <p>quarantineAid.</p>
        <div>
          <a href="#product">Product</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <Link to="/signin">
            <button className="register">Register</button>
          </Link>
          <Link to="/signin">
            <button className="sign">Sign in</button>
          </Link>
        </div>
      </div>

      <div className="showcase-container">
        <h1>Know your surroundings</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button>Sign up today</button>
      </div>
    </div>
  )
}
export default Header
