import React from "react"
import { Switch, Route } from "react-router-dom"
import SignIn from "./SignIn"
import Landing from "./Landing"

function Intro() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
      </Switch>
    </div>
  )
}

export default Intro
