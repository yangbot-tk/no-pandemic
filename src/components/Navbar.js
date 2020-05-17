import React, { useState, useEffect } from "react"
import firebase from "firebase"
import { BrowserRouter as Router } from "react-router-dom"
import { Link, Switch, Route } from "react-router-dom"
import Home from "./home/Home"
import Profile from "./profile/Profile"
import Symptom from "./symptom/Symptom"
import Aid from "./aid/Aid"
import Status from "./status/Status"
import Game from "./game/Game"
import Hero from "./hero/Hero"
import About from "./About"
import $ from "jquery"

function Navbar() {
  const db = firebase.firestore()
  const [signin, setSignIn] = useState(false)

  function resetComponent() {
    setSignIn(false)
  }

  console.log(`
  Hello, Developers!
  Hope You Have Fun With This App!
  く__,.ヘヽ.        /  ,ー､ 〉
           ＼ ', !-─‐-i  /  /´
           ／｀ｰ'       L/／｀ヽ､
         /   ／,   /|   ,   ,       ',
       ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i
        ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |
          !,/7 '0'     ´0iソ|    |
          |.从"    _     ,,,, / |./    |
          ﾚ'| i＞.､,,__  _,.イ /   .i   |
            ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |
              | |/i 〈|/   i  ,.ﾍ |  i  |
             .|/ /  ｉ：    ﾍ!    ＼  |
              kヽ>､ﾊ    _,.ﾍ､    /､!
              !'〈//｀Ｔ´', ＼ ｀'7'ｰr'
              ﾚ'ヽL__|___i,___,ンﾚ|ノ
                  ﾄ-,/  |___./
                  'ｰ'    !_,.:
你好开发者！
`)

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      db.collection("user")
        .doc(user.uid)
        .onSnapshot((doc) => {
          setDarkMode(doc.data().DarkMode)
        })
    })
  })

  useEffect(() => {
    if (darkMode) {
      console.log("黑夜模式")
      $(".navbar").css({
        "background-color": "#333",
        "box-shadow": "none",
        transition: "all 0.5s",
      })
      $(".navbar i").css({
        color: "white",
        transition: "all 0.5s",
      })
      $(".navbar p").css({
        color: "white",
        transition: "all 0.5s",
      })
    } else {
      console.log("白天模式")
      $(".navbar").css({
        "background-color": "rgb(227, 65, 65)",
        "box-shadow": "7px 4px 14px -10px rgba(107, 103, 103, 1)",
        transition: "all 0.5s",
      })
      $(".navbar i").css({
        color: "rgb(80, 80, 80)",
        transition: "all 0.5s",
      })
      $(".navbar p").css({
        color: "rgb(80, 80, 80)",
        transition: "all 0.5s",
      })
    }
  }, [darkMode])

  return (
    <Router>
      <div>
        {signin === true ? <Home /> : null}
        <div className="navbar">
          <div>
            <Link to="/signin/home" onClick={resetComponent}>
              <i className="fas fa-home"></i>
            </Link>
            <p>Home</p>
          </div>

          <div>
            <Link to="/signin/symptom" onClick={resetComponent}>
              <i className="fas fa-user-md"></i>
            </Link>
            <p>Symptom</p>
          </div>

          <div>
            <Link to="/signin/aid" onClick={resetComponent}>
              <i className="fas fa-first-aid"></i>
            </Link>
            <p>Aid</p>
          </div>

          <div>
            <Link to="/signin/status" onClick={resetComponent}>
              <i className="fas fa-chart-line"></i>
            </Link>
            <p>Status</p>
          </div>

          <div>
            <Link to="/signin/game" onClick={resetComponent}>
              <i className="fas fa-gamepad"></i>
            </Link>
            <p>Game</p>
          </div>

          <div>
            <Link to="/signin/hero" onClick={resetComponent}>
              <i className="fas fa-hand-holding-heart"></i>
            </Link>
            <p>Hero</p>
          </div>

          <div>
            <Link to="/signin/info" onClick={resetComponent}>
              <i className="fas fa-info-circle"></i>
            </Link>
            <p>About</p>
          </div>
        </div>

        <div className="mob-navbar" onClick={resetComponent}>
          <div>
            <Link to="/signin/home">
              <i className="fas fa-home"></i>
            </Link>
            <p>Home</p>
          </div>

          <div>
            <Link to="/signin/symptom" onClick={resetComponent}>
              <i className="fas fa-user-md"></i>
            </Link>
            <p>Symptom</p>
          </div>

          <div>
            <Link to="/signin/aid" onClick={resetComponent}>
              <i className="fas fa-first-aid"></i>
            </Link>
            <p>Aid</p>
          </div>

          <div>
            <Link to="/signin/profile" onClick={resetComponent}>
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
          <Route path="/signin/game">
            <Game />
          </Route>
          <Route path="/signin/hero">
            <Hero />
          </Route>
          <Route path="/signin/info">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default Navbar
