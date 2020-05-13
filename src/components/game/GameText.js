import React from "react"

function GameText(props) {
  return (
    <div className="game-item-text">
      <h2>{props.title}</h2>
      <p>{props.info}</p>
      <h3>{props.teamName}</h3>
      <ul>{props.teamMember}</ul>
    </div>
  )
}

export default GameText
