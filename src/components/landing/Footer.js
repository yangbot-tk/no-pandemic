import React from "react"

function Footer() {
  return (
    <footer>
      <div className="col-1">
        <h3>CovidAid</h3>
        <p>@2020 CovidAid. All rights reserved</p>
        <div>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook"></i>
        </div>
      </div>

      <div className="col-2">
        <h4>Team 14 COMP2800</h4>
        <a href="https://github.com/">About</a>
        <a href="https://github.com/">Security</a>
        <a href="https://github.com/">Blog</a>
        <a href="https://github.com/">Resource</a>
      </div>

      <div className="col-3">
        <h4>About Us</h4>
        <a href="https://github.com/">Stories</a>
        <a href="https://github.com/">About Us</a>
        <a href="https://github.com/">Blog</a>
        <a href="https://github.com/">More</a>
      </div>

      <div className="col-4">
        <h4>FAQ</h4>
        <a href="https://github.com/">Help Center</a>
        <a href="https://github.com/">Usage</a>
        <a href="https://github.com/">Terms of Service</a>
        <a href="https://github.com/">Privacy</a>
      </div>
    </footer>
  )
}
export default Footer
