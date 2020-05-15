import React, { useEffect, useState, useRef } from "react"
import TestCentreItem from "./TestCentreItem"
import testData from "../../data/testing-centres-geo.json"

const mapStyles = {
  width: "80vw",
  height: "470px",
}

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

function TestCenterMap() {
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
    <div className="nearme-wrap">
      <h3>CANADA TEST CENTRE</h3>
      <div className="nearme-container">
        <div
          className="nearme-map-container"
          ref={googleMapRef}
          style={mapStyles}
        />
        <div className="nearme-list-container">
          <select name="province" onChange={selectProv}>
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
