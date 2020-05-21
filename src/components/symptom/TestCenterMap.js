import React, { useEffect, useState, useRef } from "react"
import TestCentreItem from "./TestCentreItem"
import testData from "../../data/testing-centres-geo.json"

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

const darkInput = {
  backgroundColor: "rgba(0, 0, 0 ,0)",
  color: "white",
}

const darkList = {
  color: "white",
  border: "1px solid #121212",
  backgroundColor: "rgba(0, 0, 0 ,0)",
}

// Source code from Google Map
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

const GOOGLE_MAP_API_KEY = "AIzaSyBcAUk21V9tUi3ZyziIG6TRirD3Uw_ECGM"

const locationList = testData.features.map((item) => {
  if (
    item.properties.USER_Name &&
    item.properties.USER_City &&
    item.properties.USER_Prov &&
    item.properties.USER_PostalCode &&
    item.properties.USER_Phone &&
    item.geometry.coordinates
  ) {
    return {
      id: item.properties.OBJECTID,
      name: item.properties.USER_Name,
      city: item.properties.USER_City,
      prov: item.properties.USER_Prov,
      code: item.properties.USER_PostalCode,
      phone: item.properties.USER_Phone,
      lat: item.geometry.coordinates[1],
      lng: item.geometry.coordinates[0],
    }
  }
})
console.log(locationList)
// 拿到所有省份
// const provTest = testCentre.map((item) => item.prov)
// const unique = provTest.filter((item, i, ar) => ar.indexOf(item) === i)
// console.log(unique)

function TestCenterMap(props) {
  const googleMapRef = React.createRef()
  const googleMap = useRef(null)
  const marker = useRef(null)
  const [province, setProvince] = useState("ON")
  const [center, setCenter] = useState({ lat: 50.0, lng: -85.0 })

  const testCentreAll = locationList.filter((item) => item !== undefined)

  const testCentre = locationList.filter(
    (item) => item !== undefined && item.prov === province
  )

  const testCentreComponent = testCentre.map((centre) => (
    <TestCentreItem
      key={centre.id}
      name={centre.name}
      phone={centre.phone}
      location={`${centre.city} ${centre.prov} ${centre.code}`}
      theme={props.theme}
    />
  ))

  function selectProv(event) {
    const { value } = event.target
    setProvince(value)
    if (value === "ON") {
      setCenter({ lat: 50.0, lng: -85.0 })
    } else if (value === "MB") {
      setCenter({ lat: 53.76086, lng: -98.813873 })
    } else if (value === "NS") {
      setCenter({ lat: 45.0, lng: -63.0 })
    } else if (value === "BC") {
      setCenter({ lat: 53.726669, lng: -127.647621 })
    } else if (value === "NB") {
      setCenter({ lat: 46.49839, lng: -66.159668 })
    } else if (value === "NL") {
      setCenter({ lat: 53.135509, lng: -57.660435 })
    }
  }

  const createGoogleMap = () =>
    new window.google.maps.Map(googleMapRef.current, {
      mapTypeControl: false,
      zoom: 5,
      center: {
        lat: center.lat,
        lng: center.lng,
      },
      styles: props.theme === true ? darkMap : null,
    })

  const createMarker = () =>
    testCentreAll.map(
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
  }, [center])

  return (
    <div
      style={props.theme === true ? darkBackground : null}
      className="nearme-wrap"
    >
      <h3 style={props.theme === true ? darkText : null}>CANADA TEST CENTRE</h3>
      <div className="nearme-container">
        <div
          className="nearme-map-container"
          ref={googleMapRef}
          style={mapStyles}
        />
        <div className="nearme-list-container">
          <select
            style={props.theme === true ? darkInput : null}
            name="province"
            onChange={selectProv}
          >
            <option value="ON">ON</option>
            <option value="MB">MB</option>
            <option value="NS">NS</option>
            <option value="BC">BC</option>
            <option value="NB">NB</option>
            <option value="NL">NL</option>
          </select>
          {testCentreComponent}
        </div>
      </div>
    </div>
  )
}

export default TestCenterMap
