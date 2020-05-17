import React, { useEffect, useRef, useState } from "react"
import NearMeItem from "./NearMeItem"

const mapStyles = {
  width: "80vw",
  height: "470px",
}

const darkBackground = {
  backgroundColor: "#121212",
  border: "1px solid #333",
}

const darkSurface = {
  backgroundColor: "#333",
}

const darkText = {
  color: "white",
}

const darkSecondaryText = {
  color: "rgba(255, 255, 255, 0.5)",
}

const darkInput = {
  backgroundColor: "rgba(0, 0, 0 ,0)",
  color: "white",
}

const darkList = {
  color: "white",
  border: "1px solid #121212",
  backgroundColor: "rgba(0, 0, 0 ,0)",
}

const darkMap = [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }],
  },
]

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
      <NearMeItem key={item.place_id} place={item} theme={props.theme} />
    ) : null
  )

  console.log(darkMap)

  const createGoogleMap = () =>
    new window.google.maps.Map(googleMapRef.current, {
      mapTypeControl: false,
      zoom: 15,
      center: {
        lat: 49.215793299999994,
        lng: -122.9903403,
      },
      styles: props.theme === true ? darkMap : null,
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
    <div
      className="nearme-wrap"
      style={props.theme === true ? darkBackground : null}
    >
      <h3 style={props.theme === true ? darkText : null}>DOCTOR NEAR ME</h3>
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
