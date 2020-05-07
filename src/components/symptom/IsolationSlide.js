import React from "react"
import Isolation from "../aid/highrisk/Isolation"
function IsolationSlide(props) {
  return (
    <div className="preventation-modal">
      <div className="preventation-modal-content">
        <Isolation />
      </div>
      <div className="modal-btn">
        <button onClick={props.offToggle}>Return</button>
      </div>
    </div>
  )
}

export default IsolationSlide
