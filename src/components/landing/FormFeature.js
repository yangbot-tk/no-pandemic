import React from "react"
import { Link } from "react-router-dom"

function FormFeature() {
  return (
    <div className="form-feature-container">
      <img
        data-aos="fade-up"
        src="/images/landing/macall-symptom.png"
        alt="symptom package"
      />
      <div data-aos="fade-up">
        <h1>Self-Accessment</h1>
        <p>
          We provide self-accessment related to the current pandemic, and
          calculating the most frequent words among users' reported symptom.
        </p>
        <Link to="/signin">
          <button>Take Accessment</button>
        </Link>
      </div>
    </div>
  )
}

export default FormFeature
