import React from "react"

function Sponsor() {
  return (
    <div className="sponsor-container">
      <h3>BUILT WITH</h3>
      <div className="sponsor-item">
        <div>
          <i className="fab fa-react"></i>
          <p>React</p>
        </div>
        <div>
          <i className="fab fa-html5"></i>
          <p>HTML5</p>
        </div>
        <div>
          <i className="fab fa-css3-alt"></i>
          <p>CSS3</p>
        </div>
        <div>
          <i className="fas fa-database"></i>
          <p>Firebase</p>
        </div>
        <div>
          <i className="fab fa-sass"></i>
          <p>Sass</p>
        </div>
      </div>
    </div>
  )
}

export default Sponsor
