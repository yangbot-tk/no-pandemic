import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Link, Switch, Route } from "react-router-dom"
import Home from "./home/Home"
import Profile from "./profile/Profile"
import Symptom from "./symptom/Symptom"
import Aid from "./aid/Aid"
import Status from "./status/Status"

function Navbar() {
  return (
    <Router>
      <div>
        {/* Links for negavitate page */}

        <div className="navbar">
          <div>
            <Link to="/home">
              <i className="fas fa-home"></i>
            </Link>
            <p>Home</p>
          </div>

          <div>
            <Link to="/symptom">
              <i className="fas fa-user-md"></i>
            </Link>
            <p>Symptom</p>
          </div>

          <div>
            <Link to="/aid">
              <i className="fas fa-first-aid"></i>
            </Link>
            <p>Aid</p>
          </div>

          <div>
            <Link to="/profile">
              <i className="fas fa-user-circle"></i>
            </Link>
            <p>Profile</p>
          </div>

          <div>
            <Link to="/status">
              <i class="fas fa-chart-line"></i>
            </Link>
            <p>Status</p>
          </div>
          <div>
            <Link to="/logout">
              <i class="fas fa-sign-out-alt"></i>
            </Link>
            <p>Logout</p>
          </div>
        </div>

        <div className="mob-navbar">
          <div>
            <Link to="/home">
              <i className="fas fa-home"></i>
            </Link>
            <p>Home</p>
          </div>

          <div>
            <Link to="/symptom">
              <i className="fas fa-user-md"></i>
            </Link>
            <p>Symptom</p>
          </div>

          <div>
            <Link to="/aid">
              <i className="fas fa-first-aid"></i>
            </Link>
            <p>Aid</p>
          </div>

          <div>
            <Link to="/profile">
              <i className="fas fa-user-circle"></i>
            </Link>
            <p>Profile</p>
          </div>
        </div>

        {/* Switch page */}
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/symptom">
            <Symptom />
          </Route>
          <Route exact path="/aid">
            <Aid />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/status">
            <Status />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default Navbar
