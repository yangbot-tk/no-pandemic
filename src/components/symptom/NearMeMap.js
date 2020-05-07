import React, { useEffect, useRef, useState } from "react"

const mapStyles = {
  width: "700px",
  height: "480px",
}

const GOOGLE_MAP_API_KEY = "AIzaSyBcAUk21V9tUi3ZyziIG6TRirD3Uw_ECGM"

function TestCenterMap() {
  const googleMapRef = React.createRef()
  const googleMap = useRef(null)
  const marker = useRef(null)
  const [coor, setCoor] = useState([])

  //Google map search place params
  const userLocation = { lat: 49.215793299999994, lng: -122.9903403 }
  const searchRadius = 2000
  const searchType = "health"
  const searchKeyword = "doctor"
  const proxyurl = "https://cors-anywhere.herokuapp.com/"
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${userLocation.lat},${userLocation.lng}&radius=${searchRadius}&type=${searchType}&keyword=${searchKeyword}&key=${GOOGLE_MAP_API_KEY}`

  //load google map
  useEffect(() => {
    fetch(proxyurl + url)
      .then((response) => response.json())
      .then((data) => {
        setCoor(data.results)
      })
  }, [])

  const locationList = coor.map(function (place) {
    return {
      lat: place.geometry.location.lat,
      lng: place.geometry.location.lng,
    }
  })

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

  return <div id="near-me-map" ref={googleMapRef} style={mapStyles} />
}

export default TestCenterMap
