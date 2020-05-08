import React, { useState } from "react"

function Feedback(props) {
  const [show, setShow] = useState(true)

  function toggle() {
    window.location.reload()
  }
  return (
    <div>
      {show === true ? (
        <div className="feedback-container">
          <div>
            <img src={props.imgUrl} alt="feedback info" />
            <h3>{props.msg}</h3>
            <p>{props.info}</p>
            <button onClick={toggle}>OK</button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Feedback
