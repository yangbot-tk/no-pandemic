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

function Navbar() {
  const db = firebase.firestore()
  const [signin, setSignIn] = useState(false)

  function resetComponent() {
    setSignIn(false)
  }

  // firebase.auth().onAuthStateChanged((user) => {
  //   db.collection("user")
  //     .doc(user.uid)
  //     .onSnapshot((doc) => {
  //       setSignIn(doc.data().show)
  //     })
  // })
  console.log(`
  Hello, Developers!
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
`)
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
        </Switch>
      </div>
    </Router>
  )
}

export default Navbar
