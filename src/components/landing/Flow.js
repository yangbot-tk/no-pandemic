import React from "react"

function Flow() {
  return (
    <div className="flow-container">
      <h1>What We Provide</h1>
      <img className="virus-anime" src="/images/wave.png" alt="icon" />
      <div className="flow-item">
        <div>
          <img src="/images/heatmap-icon.png" alt="icon" />
          <h3>Cluster Maps</h3>
          <p>
            A map of users' local area to see how it's been impacted by covid-19
          </p>
        </div>
        <div>
          <img src="/images/chart-icon.png" alt="icon" />
          <h3>Daily Summary</h3>
          <p>
            A daily analysis of covid-19 status of Canada including confimed
            cases and others
          </p>
        </div>
        <div>
          <img src="/images/suggestion-icon.png" alt="icon" />
          <h3>Suggestion</h3>
          <p>Prevention tips and suggestion based on user destination</p>
        </div>
      </div>
    </div>
  )
}

export default Flow
