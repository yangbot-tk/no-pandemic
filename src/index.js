import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import "./style/index.css"
import Intro from "./Intro"

ReactDOM.render(
  <Router>
    <Intro />
  </Router>,
  document.getElementById("root")
)
