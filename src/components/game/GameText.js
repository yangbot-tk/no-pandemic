import React from "react"

function GameText(props) {
  const teamMemberList = props.teamMember.map((item) => <li>{item}</li>)

  return (
    <div className="game-item-text">
      <div className="game-item-text-main">
        <h2>{props.title}</h2>

        <div className="game-item-text-info">
          <p style={{ width: "45%" }}>Background: {props.info}</p>

          <div>
            <h3>Team</h3>
            <p>{props.teamName}</p>
          </div>

          <div>
            <h3>Team Members</h3>
            <ul>{teamMemberList}</ul>
          </div>
        </div>
        <a target="_blank" href={props.gameUrl}>
          <button>Play</button>
        </a>
      </div>
    </div>
  )
}

export default GameText
