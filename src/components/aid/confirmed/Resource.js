import React, { useState } from "react"
import resourceData from "../../../data/resourceData"
import ResourceItem from "./ResourceItem"
function Resource() {
  const [show, setShow] = useState(false)
  const prevSize = 4

  function toggle() {
    setShow((prevShow) => !prevShow)
  }

  const resourcePreview = resourceData
    .slice(0, prevSize)
    .map((item) => <ResourceItem key={item.id} resource={item} />)

  const resourceAll = resourceData.map((item) => (
    <ResourceItem key={item.id} resource={item} />
  ))
  const btnText = show === true ? "Fold" : "Display All"

  return (
    <div className="resource-container">
      <h2>For You Health</h2>
      <h4>
        Sponsored by Walmart and Superstore. Products will be shipped within 1-2
        weeks after process
      </h4>
      <div className="resource-item-container">
        {show === true ? resourceAll : resourcePreview}
      </div>
      <div className="resource-item-btn">
        <button onClick={toggle}>{btnText}</button>
      </div>
    </div>
  )
}

export default Resource
