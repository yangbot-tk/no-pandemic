import React, { useState } from "react"

function IsolationItem(props) {
  const [modal, setModal] = useState(false)

  const darkBackground = {
    backgroundColor: "#121212",
  }

  const darkSurface = {
    backgroundColor: "#333",
  }

  const darkText = {
    color: "white",
  }

  const darkSecondaryText = {
    color: "rgba(255, 255, 255, 0.5)",
  }

  const darkInput = {
    backgroundColor: "rgba(0, 0, 0 ,0)",
  }

  let list = []
  for (let i = 0; i < props.details.length; i++) {
    list.push(props.details[i])
  }

  const listItem = list.map((item) => (
    <li style={props.theme === true ? darkText : null} key={item}>
      {item}
    </li>
  ))

  function showModal() {
    setModal(true)
  }

  function offModal() {
    setModal(false)
  }

  return (
    <div>
      <div
        style={props.theme === true ? darkSurface : null}
        className="isolation-item"
      >
        <img src={props.imgUrl} alt="stay home" width="100px" height="100px" />
        <h3 style={props.theme === true ? darkText : null}>{props.title}</h3>
        <p style={props.theme === true ? darkSecondaryText : null}>
          {props.content}
        </p>
        <button
          style={props.theme === true ? darkSurface : null}
          onClick={showModal}
        >
          Read more
        </button>
      </div>

      {modal === true ? (
        <div className="isolation-item-modal">
          <div
            style={props.theme === true ? darkSurface : null}
            className="isolation-item-modal-content"
          >
            <h3 style={props.theme === true ? darkText : null}>
              {props.title}
            </h3>
            <ul>{listItem}</ul>
            <div>
              <button
                style={props.theme === true ? darkSurface : null}
                onClick={offModal}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default IsolationItem
