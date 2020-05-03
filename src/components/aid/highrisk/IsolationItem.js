import React, { useState } from "react"

function IsolationItem(props) {
  const [modal, setModal] = useState(false)

  let list = []
  for (let i = 0; i < props.details.length; i++) {
    list.push(props.details[i])
  }

  const listItem = list.map((item) => <li key={item}>{item}</li>)

  function showModal() {
    setModal(true)
  }

  function offModal() {
    setModal(false)
  }

  return (
    <div>
      <div className="isolation-item">
        <img src={props.imgUrl} alt="stay home" width="100px" height="100px" />
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <button onClick={showModal}>Read more</button>
      </div>

      {modal === true ? (
        <div className="isolation-item-modal">
          <div className="isolation-item-modal-content">
            <h3>{props.title}</h3>
            <ul>{listItem}</ul>
            <div>
              <button onClick={offModal}>Back</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default IsolationItem
