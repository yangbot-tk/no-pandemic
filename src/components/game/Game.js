import React from "react"
import UserNav from "../UserNav"

function Game() {
  return (
    <div className="main-container">
      <UserNav title="Game Dashboard" />
      <div className="content-container">
        <MyMap />
      </div>
    </div>
  )
}

export default Game
