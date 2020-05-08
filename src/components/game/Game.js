import React from "react"
import UserNav from "../UserNav"

function Game() {
  return (
    <div className="main-container">
      <UserNav title="Game Dashboard" />

      <div className="game-container">
        <iframe
          src="https://daffyd.ca/covid/"
          scrolling="no"
          frameBorder="no"
          title="covid game"
        ></iframe>
      </div>
    </div>
  )
}

export default Game
