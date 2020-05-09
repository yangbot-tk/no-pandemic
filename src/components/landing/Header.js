import React from "react"
import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="showcase-container">
      <div className="header">
        <p className="logo">NoPandemic.</p>
        <div>
          <a href="#product">Product</a>
          <a href="#about">About</a>
          <a href="#feature">Feature</a>
          <a href="#feature">Architecture</a>
          <a href="#contact">Contact</a>
          <Link to="/signin">
            <button className="register">Register</button>
          </Link>
          <Link to="/signin">
            <button className="sign">Sign in</button>
          </Link>
        </div>
      </div>

      <div className="showcase-text">
        <h1>Know Your Surroundings</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <Link to="/signin">
          <button>Sign up today</button>
        </Link>
        <img className="virus-1" src="/images/virus.png" alt="virus anime" />
        <img className="virus-2" src="/images/virus.png" alt="virus anime" />
        <img className="virus-3" src="/images/virus.png" alt="virus anime" />
        <img className="virus-4" src="/images/virus.png" alt="virus anime" />
        <img className="virus-5" src="/images/virus.png" alt="virus anime" />
      </div>
    </div>
  )
}
export default Header
