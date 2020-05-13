import React from "react"

function GameThum(props) {
  return (
    <div className="game-item">
      <img src={props.imgUrl} alt="game thumb" />
    </div>
  )
}

export default GameThum
