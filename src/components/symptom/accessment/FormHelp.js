import React, { useState } from "react"

function FormHelp(props) {
  const [show, setShow] = useState(false)
  const [icon, setIcon] = useState("fas fa-plus")

  function showFAQ() {
    setShow((prevShow) => !prevShow)

    if (show) {
      setIcon("fas fa-plus")
    } else {
      setIcon("fas fa-minus")
    }
  }

  return (
    <div className="formhelp-item">
      <a onClick={showFAQ}>
        <i class={icon}></i>
        {props.title}
      </a>

      {show === true ? (
        <div>
          <div className="vertical-line"></div>
          <p>{props.content}</p>
        </div>
      ) : null}
    </div>
  )
}

export default FormHelp
