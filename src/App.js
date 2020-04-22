import React from "react"
import SignIn from "./components/login/SignIn"
import Landing from "./components/landing/Landing"
import Home from "./components/home/Home"
import Profile from "./components/profile/Profile"
import Symptom from "./components/symptom/Symptom"
import Aid from "./components/aid/Aid"

function App() {
  return (
    <div className="App">
      <Home />
      <Landing />
      <Symptom />
      <Aid />
      <Profile />
    </div>
  )
}

export default App
