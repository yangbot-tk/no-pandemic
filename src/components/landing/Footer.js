import React from "react"

function Footer() {
  return (
    <footer>
      <div className="col-1">
        <h3>CovidAid</h3>
        <p>@2020 CovidAid. All rights reserved</p>
        <div>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-facebook"></i>
        </div>
      </div>

      <div className="col-2">
        <h4>Team 14 COMP2800</h4>
        <a href="#">About</a>
        <a href="#">Security</a>
        <a href="#">Blog</a>
        <a href="#">Resource</a>
      </div>

      <div className="col-3">
        <h4>About Us</h4>
        <a href="#">Stories</a>
        <a href="#">About Us</a>
        <a href="#">Blog</a>
        <a href="#">More</a>
      </div>

      <div className="col-4">
        <h4>FAQ</h4>
        <a href="#">Help Center</a>
        <a href="#">Usage</a>
        <a href="#">Terms of Service</a>
        <a href="#">Privacy</a>
      </div>
    </footer>
  )
}
export default Footer
