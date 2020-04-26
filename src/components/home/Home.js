import React, { Component } from "react"
import firebase from "firebase"
import Map from "./Map"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: null,
      lng: null,
      location: {
        house_number: "",
        road: "",
        city: "",
        state: "",
        postcode: "",
        country: "",
      },
    }
  }
  componentDidMount() {
    const db = firebase.firestore()
    navigator.geolocation.getCurrentPosition((position) => {
      let token = "a1ee650f1079c4"
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      let url = "https://us1.locationiq.com/v1/reverse.php?"
      let requestUrl = `${url}key=${token}&lat=${lat}&lon=${lon}&format=json`

      //reverse geocoding user geolocation
      fetch(requestUrl)
        .then((res) => res.json())
        .then((location) => {
          this.setState({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            location: {
              road: location.address.road,
              city: location.address.city,
              state: location.address.state,
              postcode: location.address.postcode,
              country: location.address.country,
            },
          })

          //write user location to firebase
          firebase.auth().onAuthStateChanged((user) => {
            db.collection("user")
              .doc(user.uid)
              .set(
                {
                  Location: {
                    road: location.address.road,
                    city: location.address.city,
                    state: location.address.state,
                    postcode: location.address.postcode,
                    country: location.address.country,
                  },
                },
                {
                  merge: true,
                }
              )
          })
          console.log(location)
        })
    })
  }

  render() {
    console.log(this.state.location)
    return (
      <div className="content-container">
        <h1>Hello, {firebase.auth().currentUser.displayName}</h1>

        <p>Current user latitude: {this.state.lat}</p>
        <p>Current user longitude: {this.state.lng}</p>
        <Map lat={this.state.lat} lng={this.state.lng} />
      </div>
    )
  }
}
export default Home
