import React, { useState, useEffect } from "react"
import NearMeMap from "./NearMeMap"

function NearMe(props) {
  const [coor, setCoor] = useState([])
  const GOOGLE_MAP_API_KEY = "AIzaSyBcAUk21V9tUi3ZyziIG6TRirD3Uw_ECGM"

  //Google map search place params
  const userLocation = { lat: 49.215793299999994, lng: -122.9903403 }
  const searchRadius = 2000
  const searchType = "health"
  const searchKeyword = "doctor"
  const proxyurl = "https://cors-anywhere.herokuapp.com/"
  const openNow = "opennow"
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${userLocation.lat},${userLocation.lng}&radius=${searchRadius}&type=${searchType}&keyword=${searchKeyword}&key=${GOOGLE_MAP_API_KEY}`
  console.log(url)
  //load google map
  useEffect(() => {
    fetch(proxyurl + url)
      .then((response) => response.json())
      .then((data) => {
        setCoor(data.results)
      })
  }, [])

  return (
    <NearMeMap
      theme={props.theme}
      placeList={coor}
      googleApi={GOOGLE_MAP_API_KEY}
    />
  )
}

export default NearMe
