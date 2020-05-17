import React, { useState, useRef, useEffect } from "react"
import firebase from "firebase"
import GoogleMapReact from "google-map-react"
import trees from "../../data/street-treesgeo.json"
import useSupercluster from "use-supercluster"
import { usePosition } from "use-position"
import "../../style/MyMap.css"
import Loading from "../Loading"
import HomeSwitchItem from "./HomeSwitchItem"
import $ from "jquery"

function MyMap(props) {
  const mapDarkStyle = [
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

  const Marker = ({ children }) => children
  const mapRef = useRef()
  const [bounds, setBounds] = useState(null)
  const [zoom, setZoom] = useState(14)
  const userLocation = usePosition()

  const darkSurface = {
    backgroundColor: "#333",
  }

  const darkText = {
    color: "white",
  }

  const db = firebase.firestore()
  const [profileUrl, setProfileUrl] = useState("/images/user.jpg")
  const [modal, setModal] = useState(false)
  const [center, setCenter] = useState({
    lat: props.lat,
    lng: props.ln,
  })
  const [defaultCenter, setDefaultCenter] = useState({
    lat: props.lat,
    lng: props.lng,
  })

  const [currLocation, setCurrLocation] = useState({ city: "", prov: "" })
  const [loading, setLoading] = useState(true)

  const [search, setSearch] = useState("")
  const [searchProgress, setSearchProgress] = useState(false)
  const [searchResult, setSearchResult] = useState({
    lat: "",
    lng: "",
    formatAddress: "",
  })

  const [home, setHome] = useState({
    address: "",
    city: "",
    postalcode: "",
    lat: 49.278752,
    lng: -123.100365,
    formatAddress: "",
  })

  const [school, setSchool] = useState({
    address: "",
    city: "",
    postalcode: "",
    lat: 49.278094,
    lng: -122.919883,
    formatAddress: "",
  })

  const [work, setWork] = useState({
    address: "",
    city: "",
    postalcode: "",
    lat: 49.105897,
    lng: -122.827956,
    formatAddress: "",
  })

  const [verify, setVerify] = useState(false)
  const [showHome, setShowHome] = useState(false)
  const [showSchool, setShowSchool] = useState(false)
  const [showWork, setShowWork] = useState(false)

  useEffect(() => {
    setCenter({ lat: props.lat, lng: props.lng })
    setDefaultCenter({ lat: props.lat, lng: props.lng })
    setCurrLocation({
      city: props.city,
      prov: props.prov,
    })
    setLoading(false)
  }, [props])

  const style = {
    height: "100vh",
    width: "100%",
  }
  const treesdata = trees.features.filter((tree) => tree.geometry !== null)
  const points = treesdata.map((tree) => ({
    type: "Feature",
    properties: {
      cluster: false,
      treeId: tree.properties.tree_id,
      category: tree.properties.genus_name,
    },
    geometry: {
      type: "Point",
      coordinates: [
        parseFloat(tree.geometry.coordinates[0]),
        parseFloat(tree.geometry.coordinates[1]),
      ],
    },
  }))
  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 },
  })

  firebase.auth().onAuthStateChanged((user) => {
    db.collection("user")
      .doc(user.uid)
      .get()
      .then((snap) => {
        if (snap.data().Profile === undefined) {
          setProfileUrl("/images/user.jpg")
        } else {
          setProfileUrl(snap.data().Profile)
        }
      })
  })

  function handleSearch(event) {
    const { value } = event.target
    setSearch(value)
  }

  function showSearchResult() {
    setSearchProgress(true)
    console.log(search)
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${search},+CA&key=AIzaSyBcAUk21V9tUi3ZyziIG6TRirD3Uw_ECGM`
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.status === "OK") {
          setCenter({
            lat: data.results[0].geometry.location.lat,
            lng: data.results[0].geometry.location.lng,
          })
          setSearchResult({
            lat: data.results[0].geometry.location.lat,
            lng: data.results[0].geometry.location.lng,
            formatAddress: data.results[0].formatted_address,
          })
        } else {
          alert("找不到这个地址")
        }
      })

    $("#search-input").val("")
    setSearchProgress(false)
  }

  function showModal() {
    setModal(true)
  }
  function hideModal() {
    setModal(false)
  }

  function displayHome() {
    setShowHome(true)
  }
  function hideHome() {
    setShowHome(false)
    setVerify(false)
  }

  function displaySchool() {
    setShowSchool(true)
  }
  function hideSchool() {
    setShowSchool(false)
    setVerify(false)
  }

  function displayWork() {
    setShowWork(true)
  }
  function hideWork() {
    setShowWork(false)
    setVerify(false)
  }

  function handleSave() {
    // 提交信息到数据库
    // setModal(false)
    firebase.auth().onAuthStateChanged((user) => {
      db.collection("user")
        .doc(user.uid)
        .collection("Doc")
        .doc("Preference")
        .set(
          {
            Home: {
              Address: home.address,
              City: home.city,
              PostalCode: home.postalcode,
              FormatAddress: home.formatAddress,
              Lat: home.lat,
              Lng: home.lng,
            },
            School: {
              Address: school.address,
              City: school.city,
              PostalCode: school.postalcode,
              FormatAddress: school.formatAddress,
              Lat: school.lat,
              Lng: school.lng,
            },
            Work: {
              Address: work.address,
              City: work.city,
              PostalCode: work.postalcode,
              FormatAddress: work.formatAddress,
              Lat: work.lat,
              Lng: work.lng,
            },
          },
          {
            merge: true,
          }
        )
    })
    setVerify(false)
    setShowHome(false)
    setShowSchool(false)
    setShowWork(false)
  }

  function handleEdit(event) {
    const { name, value, className } = event.target
    console.log(className)
    if (className === "home-edit") {
      setHome((prevState) => ({
        ...prevState,
        [name]: value,
      }))
    } else if (className === "school-edit") {
      setSchool((prevState) => ({
        ...prevState,
        [name]: value,
      }))
    } else if (className === "work-edit") {
      setWork((prevState) => ({
        ...prevState,
        [name]: value,
      }))
    }
  }

  function handleSubmit(event) {
    console.log(event.target.id)
    const { id } = event.target
    let address
    let city
    let postalcode

    if (id === "home-btn") {
      address = home.address
      city = home.city
      postalcode = home.postalcode
    } else if (id === "school-btn") {
      address = school.address
      city = school.city
      postalcode = school.postalcode
    } else if (id === "work-btn") {
      address = work.address
      city = work.city
      postalcode = work.postalcode
    }
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}+${city}+${postalcode},+CA&key=AIzaSyBcAUk21V9tUi3ZyziIG6TRirD3Uw_ECGM`

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (id === "home-btn") {
          setHome((prevState) => ({
            ...prevState,
            lat: data.results[0].geometry.location.lat,
            lng: data.results[0].geometry.location.lng,
            formatAddress: data.results[0].formatted_address,
          }))
        } else if (id === "school-btn") {
          setSchool((prevState) => ({
            ...prevState,
            lat: data.results[0].geometry.location.lat,
            lng: data.results[0].geometry.location.lng,
            formatAddress: data.results[0].formatted_address,
          }))
        } else if (id === "work-btn") {
          setWork((prevState) => ({
            ...prevState,
            lat: data.results[0].geometry.location.lat,
            lng: data.results[0].geometry.location.lng,
            formatAddress: data.results[0].formatted_address,
          }))
        }
      })
    setVerify(true)
  }

  // 改变地图上家 工作 学校的图标显示地点
  function currCenter() {
    setCenter({ lat: defaultCenter.lat, lng: defaultCenter.lng })
  }

  function homeCenter() {
    setCenter({ lat: home.lat, lng: home.lng })
  }

  function workCenter() {
    setCenter({ lat: work.lat, lng: work.lng })
  }

  function schoolCenter() {
    setCenter({ lat: school.lat, lng: school.lng })
  }

  if (userLocation.longitude && loading === false && currLocation)
    return (
      <div className="home-container" style={style}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyBcAUk21V9tUi3ZyziIG6TRirD3Uw_ECGM",
          }}
          options={
            props.theme === true
              ? {
                  styles: mapDarkStyle,
                }
              : []
          }
          center={{
            lat: center.lat,
            lng: center.lng,
          }}
          defaultZoom={14}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map }) => {
            mapRef.current = map
          }}
          onChange={({ zoom, bounds }) => {
            setZoom(zoom)
            setBounds([
              bounds.nw.lng,
              bounds.se.lat,
              bounds.se.lng,
              bounds.nw.lat,
            ])
          }}
        >
          {clusters.map((cluster) => {
            const [longitude, latitude] = cluster.geometry.coordinates
            const {
              cluster: isCluster,
              point_count: pointCount,
            } = cluster.properties

            if (isCluster) {
              return (
                <Marker
                  key={`cluster-${cluster.id}`}
                  lat={latitude}
                  lng={longitude}
                >
                  <div
                    className="cluster-marker"
                    style={{
                      width: `${10 + (pointCount / points.length) * 20}px`,
                      height: `${10 + (pointCount / points.length) * 20}px`,
                    }}
                    onClick={() => {
                      const expansionZoom = Math.min(
                        supercluster.getClusterExpansionZoom(cluster.id),
                        20
                      )
                      mapRef.current.setZoom(expansionZoom)
                      mapRef.current.panTo({
                        lat: latitude,
                        lng: longitude,
                      })
                    }}
                  >
                    {pointCount}
                  </div>
                </Marker>
              )
            }
          })}

          <Marker lat={userLocation.latitude} lng={userLocation.longitude}>
            <img
              className="user-locate"
              src={profileUrl}
              alt="current location"
              width="50px"
              height="auto"
            />
          </Marker>

          <Marker lat={home.lat} lng={home.lng}>
            <button className="crime-marker">
              <img
                src="/images/home.png"
                alt="home"
                width="50px"
                height="auto"
              />
            </button>
          </Marker>

          <Marker lat={work.lat} lng={work.lng}>
            <button className="crime-marker">
              <img
                src="/images/work.png"
                alt="home"
                width="50px"
                height="auto"
              />
            </button>
          </Marker>

          <Marker lat={school.lat} lng={school.lng}>
            <button className="crime-marker">
              <img
                src="/images/school.png"
                alt="home"
                width="50px"
                height="auto"
              />
            </button>
          </Marker>

          {searchProgress === true ? null : (
            <Marker lat={searchResult.lat} lng={searchResult.lng}>
              <button className="crime-marker">
                <img
                  src="/images/useLocation.png"
                  alt="result"
                  width="50px"
                  height="auto"
                />
                <p>{searchResult.formatAddress}</p>
              </button>
            </Marker>
          )}
        </GoogleMapReact>

        <div
          style={props.theme === true ? darkSurface : null}
          className="home-switch-content"
        >
          <div
            style={props.theme === true ? darkText : null}
            className="home-switch-item-container"
          >
            <div className="current-location" onClick={currCenter}>
              <HomeSwitchItem
                icon="fas fa-map-marker-alt"
                text={`${currLocation.city}, ${currLocation.prov}`}
                theme={props.theme}
              />
            </div>
            <div className="switch-location" onClick={homeCenter}>
              <HomeSwitchItem
                icon="fas fa-home"
                text="Home"
                theme={props.theme}
              />
            </div>
            <div className="switch-location" onClick={schoolCenter}>
              <HomeSwitchItem
                icon="fas fa-school"
                text="School"
                theme={props.theme}
              />
            </div>
            <div className="switch-location" onClick={workCenter}>
              <HomeSwitchItem
                icon="fas fa-building"
                text="Work"
                theme={props.theme}
              />
            </div>
            <div onClick={showModal} className="setting-location">
              <i
                style={props.theme === true ? darkText : null}
                className="fas fa-pen"
              ></i>
            </div>
            <div className="search-location">
              <input
                id="search-input"
                onChange={handleSearch}
                type="text"
                placeholder="type places..."
              />
              <button onClick={showSearchResult}>Search</button>
            </div>
          </div>
        </div>

        {/* 更改编辑用户的家，工作，学校地址 */}
        {modal === true ? (
          // 用户点击编辑按钮后
          <div
            style={props.theme === true ? darkSurface : null}
            className="edit-location-container"
          >
            {/* 编辑家庭地址表单 */}
            {showHome === true ? (
              <div className="edit-location-form">
                <h3 style={props.theme === true ? darkText : null}>
                  Change Your Home Address
                </h3>
                <input
                  onChange={handleEdit}
                  name="address"
                  className="home-edit"
                  type="text"
                  placeholder="Address"
                />
                <input
                  onChange={handleEdit}
                  name="city"
                  className="home-edit"
                  type="text"
                  placeholder="City"
                />
                <input
                  onChange={handleEdit}
                  name="postalcode"
                  className="home-edit"
                  type="text"
                  placeholder="Postal Code"
                />
                <div className="submit-location-btn">
                  <button id="home-btn" onClick={handleSubmit}>
                    Add
                  </button>
                </div>

                {verify === true ? (
                  <div className="confirm-change-container">
                    <i className="fas fa-exclamation-circle"></i>
                    <p style={props.theme === true ? darkText : null}>
                      Setting your new home address as: {home.formatAddress}
                    </p>
                  </div>
                ) : null}
                <div className="modal-btn-container">
                  <button onClick={handleSave}>Save</button>
                  <button onClick={hideHome}>Cancel</button>
                </div>
              </div>
            ) : // 编辑学校地址表单
            showSchool === true ? (
              <div className="edit-location-form">
                <h3 style={props.theme === true ? darkText : null}>
                  Change Your School Address
                </h3>
                <input
                  onChange={handleEdit}
                  name="address"
                  className="school-edit"
                  type="text"
                  placeholder="Address"
                />
                <input
                  onChange={handleEdit}
                  name="city"
                  className="school-edit"
                  type="text"
                  placeholder="City"
                />
                <input
                  onChange={handleEdit}
                  name="postalcode"
                  className="school-edit"
                  type="text"
                  placeholder="Postal Code"
                />
                <div className="submit-location-btn">
                  <button id="school-btn" onClick={handleSubmit}>
                    Add
                  </button>
                </div>

                {verify === true ? (
                  <div className="confirm-change-container">
                    <i className="fas fa-exclamation-circle"></i>
                    <p style={props.theme === true ? darkText : null}>
                      Setting your new home address as: {school.formatAddress}
                    </p>
                  </div>
                ) : null}
                <div className="modal-btn-container">
                  <button onClick={handleSave}>Save</button>
                  <button onClick={hideSchool}>Cancel</button>
                </div>
              </div>
            ) : // 编辑工作地址表单
            showWork === true ? (
              <div className="edit-location-form">
                <h3 style={props.theme === true ? darkText : null}>
                  Change Your Work Address
                </h3>
                <input
                  onChange={handleEdit}
                  name="address"
                  className="work-edit"
                  type="text"
                  placeholder="Address"
                />
                <input
                  onChange={handleEdit}
                  name="city"
                  className="work-edit"
                  type="text"
                  placeholder="City"
                />
                <input
                  onChange={handleEdit}
                  name="postalcode"
                  className="work-edit"
                  type="text"
                  placeholder="Postal Code"
                />
                <div className="submit-location-btn">
                  <button id="work-btn" onClick={handleSubmit}>
                    Add
                  </button>
                </div>

                {verify === true ? (
                  <div className="confirm-change-container">
                    <i className="fas fa-exclamation-circle"></i>
                    <p style={props.theme === true ? darkText : null}>
                      Setting your new home address as: {work.formatAddress}
                    </p>
                  </div>
                ) : null}
                <div className="modal-btn-container">
                  <button onClick={handleSave}>Save</button>
                  <button onClick={hideWork}>Cancel</button>
                </div>
              </div>
            ) : (
              // 用户点击编辑首先进入的编辑主界面
              <div className="switch-location-container">
                <h3 style={props.theme === true ? darkText : null}>
                  Change Your Location
                </h3>
                <p style={props.theme === true ? darkText : null}>
                  Change your home, school and work location for easily switch
                  the area on the map
                </p>
                <div className="switch-location-btn">
                  <div onClick={displayHome}>
                    <i className="fas fa-home"></i>
                  </div>
                  <div onClick={displaySchool}>
                    <i className="fas fa-school"></i>
                  </div>
                  <div onClick={displayWork}>
                    <i className="fas fa-briefcase"></i>
                  </div>
                </div>
                <div className="switch-location-cancel-btn">
                  <button onClick={hideModal}>Cancel</button>
                </div>
              </div>
            )}
          </div>
        ) : null}
      </div>
    )
  else return <Loading />
}

export default MyMap
