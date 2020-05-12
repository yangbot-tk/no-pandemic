import React, { useState } from "react"
import HomeFeatureItem from "./HomeFeatureItem"

function HomeFeature() {
  const [panel, setPanel] = useState("cluster map")

  function showCluster() {
    setPanel("cluster map")
  }

  function showLocation() {
    setPanel("save location")
  }

  function showSearch() {
    setPanel("search place")
  }

  return (
    <div className="home-feature-container">
      <h1>Know Your Surroundings</h1>
      <p>
        Powered by Google Map and Place searches API - Displays all the patients
        as visiualizing data
      </p>

      <div className="home-feature-item-container">
        <div onClick={showCluster}>
          <HomeFeatureItem
            title="Cluster Map"
            imgUrl="/images/street-map.png"
          />
        </div>
        <div onClick={showLocation}>
          <HomeFeatureItem
            title="Save Locations"
            imgUrl="/images/search-place.png"
          />
        </div>
        <div onClick={showSearch}>
          {" "}
          <HomeFeatureItem title="Search Places" imgUrl="/images/edit.png" />
        </div>
      </div>

      {panel === "cluster map" ? (
        <img
          src="/images/landing/imac-feature-home.png"
          alt="home feature"
          width="700px"
          height="auto"
        />
      ) : panel === "save location" ? (
        <img
          src="/images/landing/imac-feature-edit.png"
          alt="home feature"
          width="700px"
          height="auto"
        />
      ) : panel === "search place" ? (
        <img
          src="/images/landing/imac-feature-search.png"
          alt="home feature"
          width="700px"
          height="auto"
        />
      ) : null}
    </div>
  )
}

export default HomeFeature
