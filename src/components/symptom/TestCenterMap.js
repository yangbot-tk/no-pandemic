import React, { useEffect, useRef } from "react"
import testData from "../../data/testing-centres-geo.json"
const mapStyles = {
  width: "900px",
  height: "480px",
}

const GOOGLE_MAP_API_KEY = "AIzaSyBcAUk21V9tUi3ZyziIG6TRirD3Uw_ECGM"

const locationList = testData.features.map(function (coor) {
  return {
    lat: coor.geometry.coordinates[1],
    lng: coor.geometry.coordinates[0],
  }
})

function TestCenterMap() {
  const googleMapRef = React.createRef()
  const googleMap = useRef(null)
  const marker = useRef(null)

  const createGoogleMap = () =>
    new window.google.maps.Map(googleMapRef.current, {
      mapTypeControl: false,
      zoom: 12,
      center: {
        lat: 49.215793299999994,
        lng: -122.9903403,
      },
    })

  const createMarker = () =>
    locationList.map(
      (location) =>
        new window.google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map: googleMap.current,
        })
    )

  useEffect(() => {
    const googleMapScript = document.createElement("script")
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`
    window.document.body.appendChild(googleMapScript)

    googleMapScript.addEventListener("load", () => {
      googleMap.current = createGoogleMap()
      marker.current = createMarker()
    })
  })

  return <div id="google-map" ref={googleMapRef} style={mapStyles} />
}

export default TestCenterMap
