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

  const healthText = health === true ? "Fold" : "Display All"

  return (
    <div className="resource-container">
      <h2>For You Health</h2>
      <h4>
        Sponsored by Walmart and Superstore. Products will be shipped within 1-2
        weeks after process
      </h4>
      <div className="resource-item-container">
        {health === true ? healthAll : healthPreview}
      </div>
      <div className="resource-item-btn">
        <button onClick={toggleHealth}>
          {health === true ? "Fold All" : "Display All"}
        </button>
      </div>

      <h2>Vegetables and Fruits</h2>
      <h4>
        Sponsored by Walmart and Superstore. Products will be shipped within 1-2
        weeks after process
      </h4>
      <div className="resource-item-container">
        {food === true ? foodAll : foodPreview}
      </div>
      <div className="resource-item-btn">
        <button onClick={toggleFood}>
          {food === true ? "Fold All" : "Display All"}
        </button>
      </div>
    </div>
  )
}

export default Resource
