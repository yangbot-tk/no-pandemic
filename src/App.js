import React from "react"
import { Link, Switch, Route } from "react-router-dom"

import Home from "./components/home/Home"
import Profile from "./components/profile/Profile"
import Symptom from "./components/symptom/Symptom"
import Aid from "./components/aid/Aid"

function App() {
  return (
    <div className="App">
      {/* Links for negavitate page */}
      <ul className="navbar">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/symptom">Symptom</Link>
        </li>
        <li>
          <Link to="/aid">Aid</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>

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
      </Switch>
    </div>
  )
}

export default App
