import React from "react"
import Isolation from "../aid/highrisk/Isolation"
function IsolationSlide(props) {
  const darkBackground = {
    backgroundColor: "#121212",
    border: "1px solid #333",
  }

  const darkInput = {
    backgroundColor: "rgba(0, 0, 0 ,0)",
  }

  return (
    <div
      style={props.theme === true ? darkBackground : null}
      className="preventation-modal"
    >
      <div className="preventation-modal-content">
        <Isolation theme={props.theme} />
      </div>
      <div className="modal-btn">
        <button
          style={props.theme === true ? darkInput : null}
          onClick={props.offToggle}
        >
          Return
        </button>
      </div>
    </div>
  )
}

export default IsolationSlide
