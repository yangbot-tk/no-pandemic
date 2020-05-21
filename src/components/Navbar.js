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
import MobileProfile from "./MobileProfile"

function Navbar() {
  const db = firebase.firestore()
  const [signin, setSignIn] = useState(false)
  const darkSurface = {
    backgroundColor: "#333",
    boxShadow: "none",
  }

  const darkText = {
    color: "white",
  }
  const darkSecondaryText = {
    color: "rgba(255, 255, 255, 0.5)",
  }

  function resetComponent() {
    setSignIn(false)
  }

  console.log(`
  BCITGDNMSL
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

你有一个残破的童年吗？
你不爱社交钻研吗？
喜欢单调的生活吗？
是不是在高三还有没发挥出来的余力？
是不是不想体验西方大学的party和美好？
那来我们BCIT吧
能让你的这些想法都实现
我们是一个没有社交和欢乐的学校
来了就是死读， 死读
让你重找回高三的感觉
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

  return (
    <Router>
      <div>
        {signin === true ? <Home /> : null}
        <div style={darkMode === true ? darkSurface : null} className="navbar">
          <div>
            <Link to="/signin/home" onClick={resetComponent}>
              <i
                style={darkMode === true ? darkText : null}
                className="fas fa-home"
              ></i>
            </Link>
            <p style={darkMode === true ? darkSecondaryText : null}>Home</p>
          </div>

          <div>
            <Link to="/signin/symptom" onClick={resetComponent}>
              <i
                style={darkMode === true ? darkText : null}
                className="fas fa-user-md"
              ></i>
            </Link>
            <p style={darkMode === true ? darkSecondaryText : null}>Symptom</p>
          </div>

          <div>
            <Link to="/signin/aid" onClick={resetComponent}>
              <i
                style={darkMode === true ? darkText : null}
                className="fas fa-first-aid"
              ></i>
            </Link>
            <p style={darkMode === true ? darkSecondaryText : null}>Aid</p>
          </div>

          <div>
            <Link to="/signin/status" onClick={resetComponent}>
              <i
                style={darkMode === true ? darkText : null}
                className="fas fa-chart-line"
              ></i>
            </Link>
            <p style={darkMode === true ? darkSecondaryText : null}>Status</p>
          </div>

          <div>
            <Link to="/signin/game" onClick={resetComponent}>
              <i
                style={darkMode === true ? darkText : null}
                className="fas fa-gamepad"
              ></i>
            </Link>
            <p style={darkMode === true ? darkSecondaryText : null}>Game</p>
          </div>

          <div>
            <Link to="/signin/hero" onClick={resetComponent}>
              <i
                style={darkMode === true ? darkText : null}
                className="fas fa-hand-holding-heart"
              ></i>
            </Link>
            <p style={darkMode === true ? darkSecondaryText : null}>Hero</p>
          </div>

          <div>
            <Link to="/signin/info" onClick={resetComponent}>
              <i
                style={darkMode === true ? darkText : null}
                className="fas fa-info-circle"
              ></i>
            </Link>
            <p style={darkMode === true ? darkSecondaryText : null}>About</p>
          </div>
        </div>

        <div
          style={darkMode === true ? darkSurface : null}
          className="mob-navbar"
          onClick={resetComponent}
        >
          <div>
            <Link to="/signin/home">
              <i
                style={darkMode === true ? darkText : null}
                className="fas fa-home"
              ></i>
            </Link>
            <p style={darkMode === true ? darkSecondaryText : null}>Home</p>
          </div>

          <div>
            <Link to="/signin/symptom" onClick={resetComponent}>
              <i
                style={darkMode === true ? darkText : null}
                className="fas fa-user-md"
              ></i>
            </Link>
            <p style={darkMode === true ? darkSecondaryText : null}>Symptom</p>
          </div>

          <div>
            <Link to="/signin/aid" onClick={resetComponent}>
              <i
                style={darkMode === true ? darkText : null}
                className="fas fa-first-aid"
              ></i>
            </Link>
            <p style={darkMode === true ? darkSecondaryText : null}>Aid</p>
          </div>

          <div>
            {/* <Link to="/signin/profile" onClick={resetComponent}>
              <i
                style={darkMode === true ? darkText : null}
                className="fas fa-bars"
              ></i>
            </Link> */}
            <MobileProfile />
            <p style={darkMode === true ? darkSecondaryText : null}>More</p>
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
