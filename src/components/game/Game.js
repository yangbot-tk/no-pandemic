import React, { useState } from "react"
import UserNav from "../UserNav"
import GameThum from "./GameThum"
import GameText from "./GameText"

function Game() {
  const [game, setGame] = useState({
    id: "game-1",
    title: "",
    info: "",
    teamname: "",
    teammember: [],
    bgimage: "",
  })

  function over(event) {
    const { id } = event.currentTarget
    if (id === "game-1") {
      setGame({
        id: "game-1",
        title: "Safe Zone1",
        info:
          "Banter Bar is a virtual pub environment to provide users a platform to chat via messages, and potentially voice and video. It will include pub games such as pool and darts as activities, allowing people to gather as they would at a pub but virtually.",
        teamname: "BCIT NMSL",
        teammember: ["Yang Li", "Wenbo Ji", "Ben Jones", "Ian Snider"],
        bgimage: "/images/game/game1.jpg",
      })
    } else if (id === "game-2") {
      setGame({
        id: "game-2",
        title: "Safe Zone2",
        info:
          "Banter Bar is a virtual pub environment to provide users a platform to chat via messages, and potentially voice and video. It will include pub games such as pool and darts as activities, allowing people to gather as they would at a pub but virtually.",
        teamname: "BCIT NMSL",
        teammember: ["Yang Li", "Wenbo Ji", "Ben Jones", "Ian Snider"],
        bgimage: "/images/game/game2.jpg",
      })
    } else if (id === "game-3") {
      setGame({
        id: "game-3",
        title: "Safe Zone3",
        info:
          "Banter Bar is a virtual pub environment to provide users a platform to chat via messages, and potentially voice and video. It will include pub games such as pool and darts as activities, allowing people to gather as they would at a pub but virtually.",
        teamname: "BCIT NMSL",
        teammember: ["Yang Li", "Wenbo Ji", "Ben Jones", "Ian Snider"],
        bgimage: "/images/game/game3.jpg",
      })
    } else if (id === "game-4") {
      setGame({
        id: "game-4",
        title: "Happify.exe4",
        info:
          "Banter Bar is a virtual pub environment to provide users a platform to chat via messages, and potentially voice and video. It will include pub games such as pool and darts as activities, allowing people to gather as they would at a pub but virtually.",
        teamname: "BCIT NMSL",
        teammember: ["Yang Li", "Wenbo Ji", "Ben Jones", "Ian Snider"],
        bgimage: "/images/game/game4.jpg",
      })
    } else if (id === "game-5") {
      setGame({
        id: "game-5",
        title: "Safe Zone5",
        info:
          "Banter Bar is a virtual pub environment to provide users a platform to chat via messages, and potentially voice and video. It will include pub games such as pool and darts as activities, allowing people to gather as they would at a pub but virtually.",
        teamname: "BCIT NMSL",
        teammember: ["Yang Li", "Wenbo Ji", "Ben Jones", "Ian Snider"],
        bgimage: "/images/game/game5.jpg",
      })
    }
  }

  function leave(event) {
    const { id } = event.currentTarget
  }

  return (
    <div className="main-container">
      {/* <UserNav title="Game Dashboard" /> */}

      <div
        // style={{ backgroundImage: "url(" + game.bgimage + ")" }}
        className="game-container"
      >
        <img
          style={game.id === "game-5" ? { opacity: 1 } : { opacity: 0 }}
          className="game-bg"
          id="game-5-bg"
          src="/images/game/game5.jpg"
        />
        <img
          style={game.id === "game-4" ? { opacity: 1 } : { opacity: 0 }}
          className="game-bg"
          id="game-4-bg"
          src="/images/game/game4.jpg"
        />
        <img
          style={game.id === "game-3" ? { opacity: 1 } : { opacity: 0 }}
          className="game-bg"
          id="game-3-bg"
          src="/images/game/game3.jpg"
        />
        <img
          style={game.id === "game-2" ? { opacity: 1 } : { opacity: 0 }}
          className="game-bg"
          id="game-2-bg"
          src="/images/game/game2.jpg"
        />
        <img
          style={game.id === "game-1" ? { opacity: 1 } : { opacity: 0 }}
          className="game-bg"
          id="game-1-bg"
          src="/images/game/game1.jpg"
        />

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
            title={game.title}
            info={game.info}
            teamName={game.teamname}
            teamMember={game.teammember}
          />
        </div>
      </div>
    </div>
  )
}

export default Game
