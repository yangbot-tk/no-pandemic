import React, { useEffect, useRef, useState } from "react"
import NearMeItem from "./NearMeItem"

const mapStyles = {
  width: "80vw",
  height: "470px",
}

function NearMeMap(props) {
  const googleMapRef = React.createRef()
  const googleMap = useRef(null)
  const marker = useRef(null)

  const locationList = props.placeList.map(function (place) {
    return {
      name: place.name,
      lat: place.geometry.location.lat,
      lng: place.geometry.location.lng,
    }
  })

  const nearmeItem = props.placeList.map((item) =>
    item.rating > 3 === true ? (
      <NearMeItem key={item.place_id} place={item} />
    ) : null
  )

  const createGoogleMap = () =>
    new window.google.maps.Map(googleMapRef.current, {
      mapTypeControl: false,
      zoom: 15,
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
          title: location.name,
          map: googleMap.current,
        })
    )

  useEffect(() => {
    const googleMapScript = document.createElement("script")
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${props.googleApi}&libraries=places`
    window.document.body.appendChild(googleMapScript)

    googleMapScript.addEventListener("load", () => {
      googleMap.current = createGoogleMap()
      marker.current = createMarker()
    })
  })

  return (
    <div className="nearme-wrap">
      <h3>DOCTOR NEAR ME</h3>
      <div className="nearme-container">
        <div
          className="nearme-map-container"
          ref={googleMapRef}
          style={mapStyles}
        />
        <div className="nearme-list-container">{nearmeItem}</div>
      </div>
    </div>
  )
}

export default NearMeMap
