import React, { useState } from "react"
import resourceData from "../../../data/resourceData"
import ResourceItem from "./ResourceItem"

function Resource() {
  const [health, setHealth] = useState(false)
  const [food, setFood] = useState(false)
  const prevSize = 4

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
    .map((item) => <ResourceItem key={item.id} resource={item} />)

  const healthAll = healthList.map((item) => (
    <ResourceItem key={item.id} resource={item} />
  ))

  const foodPreview = foodList
    .slice(0, prevSize)
    .map((item) => <ResourceItem key={item.id} resource={item} />)

  const foodAll = foodList.map((item) => (
    <ResourceItem key={item.id} resource={item} />
  ))

  return (
    <div className="resource-container">
      <h2>For You Health</h2>
      <div className="resource-item-container">{healthPreview}</div>
      <div className="resource-item-btn">
        <button onClick={toggleHealth}>Display All</button>
      </div>

      <div className="resource-item-container">
        {health === true ? (
          <div className="resource-item-modal">
            <button onClick={toggleHealth}>Back</button>
            <div className="resource-item-modal-content">{healthAll}</div>
          </div>
        ) : null}
      </div>

      <h2>Vegetables and Fruits</h2>
      <div className="resource-item-container">{foodPreview}</div>
      <div className="resource-item-btn">
        <button onClick={toggleFood}>Display All</button>
      </div>

      <div className="resource-item-container">
        {food === true ? (
          <div className="resource-item-modal">
            <button onClick={toggleFood}>Back</button>
            <div className="resource-item-modal-content">{foodAll}</div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Resource
