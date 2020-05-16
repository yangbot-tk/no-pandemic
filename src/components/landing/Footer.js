import React from "react"

function Footer() {
  return (
    <footer>
      <div className="col-1">
        <h3>NoPandemic.</h3>
        <p>@2020 NoPandemic. All rights reserved</p>
        <div>
          <a href="https://github.com/yang052513/COMP-2800-Team-BBY-14-NoPandemic">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://github.com/yang052513/COMP-2800-Team-BBY-14-NoPandemic">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://github.com/yang052513/COMP-2800-Team-BBY-14-NoPandemic">
            <i className="fab fa-facebook"></i>
          </a>
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
