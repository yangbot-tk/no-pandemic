import React, { useState } from "react"
import UserNav from "../UserNav"
import GameThum from "./GameThum"
import GameText from "./GameText"

function Game() {
  const [game, setGame] = useState("")

  function over(event) {
    console.log(`你好${id}`)
    const { id } = event.currentTarget
  }

  function leave(event) {
    console.log(`再见${event.currentTarget.id}`)
    const { id } = event.currentTarget
  }

  return (
    <div className="main-container">
      {/* <UserNav title="Game Dashboard" /> */}

      <div className="game-container">
        <div className="game-item-container">
          <div className="game-item-thum">
            <div id="game-1" onMouseEnter={over} onMouseLeave={leave}>
              <GameThum imgUrl="/images/game/gameThum1.jpg" />
            </div>
            <div id="game-2" onMouseEnter={over} onMouseLeave={leave}>
              <GameThum imgUrl="/images/game/gameThum2.jpg" />
            </div>
            <div id="game-3" onMouseEnter={over} onMouseLeave={leave}>
              <GameThum imgUrl="/images/game/gameThum3.jpg" />
            </div>
            <div id="game-4" onMouseEnter={over} onMouseLeave={leave}>
              <GameThum imgUrl="/images/game/gameThum4.jpg" />
            </div>
            <div id="game-5" onMouseEnter={over} onMouseLeave={leave}>
              <GameThum imgUrl="/images/game/gameThum5.jpg" />
            </div>
          </div>
          <GameText
            title="Counter Strike: Global Offensive"
            info="Banter Bar is a virtual pub environment to provide users a platform to chat via messages, and potentially voice and video. It will include pub games such as pool and darts as activities, allowing people to gather as they would at a pub but virtually."
            teamName="BCIT NMSL"
            teamMember={["Yang Li", "Wenbo Ji", "Ben Jones", "Ian Snider"]}
          />
        </div>
      </div>
    </div>
  )
}

export default Game
