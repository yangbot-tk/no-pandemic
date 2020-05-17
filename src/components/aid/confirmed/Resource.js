import React, { useState } from "react"
import resourceData from "../../../data/resourceData"
import ResourceItem from "./ResourceItem"

function Resource(props) {
  const [health, setHealth] = useState(false)
  const [food, setFood] = useState(false)
  const prevSize = 4
  const darkText = {
    color: "white",
  }
  const darkBackground = {
    backgroundColor: "#333",
  }

  const darkSecondaryText = {
    color: "rgba(255, 255, 255, 0.5)",
  }

  const darkInput = {
    backgroundColor: "rgba(0, 0, 0 ,0)",
  }

  function toggleHealth() {
    setHealth((prevShow) => !prevShow)
  }

  function toggleFood() {
    setFood((prevShow) => !prevShow)
  }

  const healthList = resourceData.filter((item) => item.category === "health")

  const foodList = resourceData.filter((item) => item.category === "food")

  const healthPreview = healthList
    .slice(0, prevSize)
    .map((item) => (
      <ResourceItem key={item.id} resource={item} theme={props.theme} />
    ))

  const healthAll = healthList.map((item) => (
    <ResourceItem key={item.id} resource={item} theme={props.theme} />
  ))

  const foodPreview = foodList
    .slice(0, prevSize)
    .map((item) => (
      <ResourceItem key={item.id} resource={item} theme={props.theme} />
    ))

  const foodAll = foodList.map((item) => (
    <ResourceItem key={item.id} resource={item} theme={props.theme} />
  ))

  return (
    <div className="resource-container">
      <div className="confirm-module-header">
        <h3
          style={props.theme === true ? darkText : null}
          className="module-title"
        >
          For You Health
        </h3>
        <p style={props.theme === true ? darkSecondaryText : null}>
          Sponsored by Walmart and Superstore, eat healthy and stay healthy.
        </p>
      </div>

      <div className="resource-item-container">{healthPreview}</div>
      <div className="resource-item-btn">
        <button
          style={props.theme === true ? darkInput : null}
          onClick={toggleHealth}
        >
          Display All
        </button>
      </div>

      <div className="resource-item-container">
        {health === true ? (
          <div
            className="resource-item-modal"
            style={props.theme === true ? darkBackground : null}
          >
            <button
              style={props.theme === true ? darkInput : null}
              className="resource-btn"
              onClick={toggleHealth}
            >
              Back
            </button>
            <div className="resource-item-modal-content">{healthAll}</div>
          </div>
        ) : null}
      </div>

      <div className="confirm-module-header">
        <h3
          style={props.theme === true ? darkText : null}
          className="module-title"
        >
          Vegetables and Fruits
        </h3>
        <p style={props.theme === true ? darkSecondaryText : null}>
          Sponsored by Walmart and Superstore, eat healthy and stay healthy.
        </p>
      </div>
      <div className="resource-item-container">{foodPreview}</div>
      <div className="resource-item-btn">
        <button
          style={props.theme === true ? darkInput : null}
          onClick={toggleFood}
        >
          Display All
        </button>
      </div>

      <div className="resource-item-container">
        {food === true ? (
          <div
            style={props.theme === true ? darkBackground : null}
            className="resource-item-modal"
          >
            <button
              style={props.theme === true ? darkInput : null}
              className="resource-btn"
              onClick={toggleFood}
            >
              Back
            </button>
            <div className="resource-item-modal-content">{foodAll}</div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Resource
