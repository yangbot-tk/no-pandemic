import React, { Component } from "react"
import firebase from "firebase"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
      console.log(position.coords.latitude)
      console.log(position.coords.longitude)
      let token = "a1ee650f1079c4"
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      let url = "https://us1.locationiq.com/v1/reverse.php?"
      let requestUrl = `${url}key=${token}&lat=${lat}&lon=${lon}&format=json`

      fetch(requestUrl)
        .then((res) => res.json())
        .then((location) => {
          this.setState({
            location: {
              house_number: location.address.house_number,
              road: location.address.road,
              city: location.address.city,
              state: location.address.state,
              postcode: location.address.postcode,
              country: location.address.country,
            },
          })

          firebase.auth().onAuthStateChanged((user) => {
            db.collection("user")
              .doc(user.uid)
              .set(
                {
                  Location: {
                    house_number: "dd",
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
        <h1>Heatmap Page</h1>
        <p>Thdddlay the heatmap of covid-19</p>
        <p>{this.state.location.road}</p>
      </div>
    )
  }
}
export default Home
