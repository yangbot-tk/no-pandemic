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
          <HomeFeatureItem title="Cluster Map" icon="fas fa-map-marked-alt" />
        </div>
        <div onClick={showLocation}>
          <HomeFeatureItem title="Save Locations" icon="fas fa-pen" />
        </div>
        <div onClick={showSearch}>
          <HomeFeatureItem title="Search Places" icon="fas fa-search" />
        </div>
      </div>

      {panel === "cluster map" ? (
        <div className="displayed-content">
          <p>
            Displays all the patient who have related COVID-19 symptoms around
            your local area. Kepp yourself and your family safe
          </p>
          <img
            src="/images/landing/imac-feature-home.png"
            alt="home feature"
            width="700px"
            height="auto"
          />
        </div>
      ) : panel === "save location" ? (
        <div className="displayed-content">
          <p>
            Save your preferred location with easy click and switch on the
            panel.
          </p>
          <img
            src="/images/landing/imac-feature-edit.png"
            alt="home feature"
            width="700px"
            height="auto"
          />
        </div>
      ) : panel === "search place" ? (
        <div className="displayed-content">
          <p>
            Want to go out somewhere but dont know how it is been impacted with
            the pandemic? Search the places before you go
          </p>
          <img
            src="/images/landing/imac-feature-search.png"
            alt="home feature"
            width="700px"
            height="auto"
          />
        </div>
      ) : null}
    </div>
  )
}

export default HomeFeature
