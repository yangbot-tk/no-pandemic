import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Link, Switch, Route } from "react-router-dom"
import Home from "./home/Home"
import Profile from "./profile/Profile"
import Symptom from "./symptom/Symptom"
import Aid from "./aid/Aid"
import Status from "./status/Status"
import firebase from "firebase"
// import MyMap from './home/MyMap';

function Navbar() {
  return (
    <Router>
      <div>
        {/* Links for negavitate page */}

        <div className="navbar">
          <div>
            <Link to="/signin/home">
              <i className="fas fa-home"></i>
            </Link>
            <p>Home</p>
          </div>

          <div>
            <Link to="/signin/symptom">
              <i className="fas fa-user-md"></i>
            </Link>
            <p>Symptom</p>
          </div>

          <div>
            <Link to="/signin/aid">
              <i className="fas fa-first-aid"></i>
            </Link>
            <p>Aid</p>
          </div>

          <div>
            <Link to="/signin/status">
              <i className="fas fa-chart-line"></i>
            </Link>
            <p>Status</p>
          </div>

          <div>
            <Link to="/signin/game">
              <i className="fas fa-gamepad"></i>
            </Link>
            <p>Game</p>
          </div>

          <div>
            <Link to="/signin/hero">
              <i className="fas fa-hand-holding-heart"></i>
            </Link>
            <p>Hero</p>
          </div>

          <div>
            <Link to="/signin/info">
              <i className="fas fa-info-circle"></i>
            </Link>
            <p>About</p>
          </div>
        </div>

        <div className="mob-navbar">
          <div>
            <Link to="/signin/home">
              <i className="fas fa-home"></i>
            </Link>
            <p>Home</p>
          </div>

          <div>
            <Link to="/signin/symptom">
              <i className="fas fa-user-md"></i>
            </Link>
            <p>Symptom</p>
          </div>

          <div>
            <Link to="/signin/aid">
              <i className="fas fa-first-aid"></i>
            </Link>
            <p>Aid</p>
          </div>

          <div>
            <Link to="/signin/profile">
              <i className="fas fa-user-circle"></i>
            </Link>
            <p>Profile</p>
          </div>
        </div>

        {/* Switch page */}
        <Switch>
          <Route path="/signin/home">
            <Home />
          </Route>
          <Route path="/signin/symptom">
            <Symptom />
          </Route>
          <Route path="/signin/aid">
            <Aid />
          </Route>
          <Route path="/signin/profile">
            <Profile />
          </Route>
          <Route path="/signin/status">
            <Status />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default Navbar
