import React from "react"

function Feature() {
  return (
    <div className="feature-wrap">
      <a id="feature"></a>
      <div className="feature-container module-layout">
        <img data-aos="fade-up" src="images/feature.jpg" alt="feature" />
        <div>
          <h1 data-aos="fade-up">Features</h1>
          <p data-aos="fade-up">
            We provide the impacted cluster map to everyone without register.
            However, in order to contribute to our community, we would like to
            recommend you to fill the symptom in order to have access to our aid
            package to you
          </p>
          <ul>
            <li data-aos="fade-up">
              <i className="fas fa-check-circle"></i>Cluster map which shows
              people who have covid-19 symptoms
            </li>
            <li data-aos="fade-up">
              <i className="fas fa-check-circle"></i>Swicth prefereed location
              to easily auto-zoom to that location
            </li>
            <li data-aos="fade-up">
              <i className="fas fa-check-circle"></i>Dark mode for your
              preference
            </li>
            <li data-aos="fade-up">
              <i className="fas fa-check-circle"></i>COVD-19 symptom self
              accessment
            </li>
            <li data-aos="fade-up">
              <i className="fas fa-check-circle"></i>Aid resource package
            </li>
            <li data-aos="fade-up">
              <i className="fas fa-check-circle"></i>Latest news and statistic
              for the current epidemic
            </li>
          </ul>
        </div>
      </div>
      <img className="wave-3" src="images/wave-3.png" alt="wave element" />
    </div>
  )
}

export default Feature
