import React from "react"
import { Link } from "react-router-dom"

function Landing() {
  return (
    <div>
      <h1>Landing page</h1>
      <p>This page is landing page</p>
      <Link to="/signin">
        <button>Sign-In</button>
      </Link>
    </div>
  )
}

export default Landing
