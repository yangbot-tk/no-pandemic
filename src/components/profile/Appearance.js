import React, { Component } from "react"
import Switch from "react-switch"
import Manage from "./Manage"
import $ from "jquery"
import firebase from "firebase"

class Appearance extends Component {
  constructor() {
    super()
    this.state = {
      darkMode: false,
      notification: false,
      subscribe: false,
      location: false,
    }
  }

  componentDidMount() {
    const db = firebase.firestore()
    firebase.auth().onAuthStateChanged((user) => {
      db.collection("user")
        .doc(user.uid)
        .get()
        .then((doc) => {
          if (doc.data().DarkMode) {
            this.setState({ darkMode: doc.data().DarkMode })
          }
        })
    })
  }

  handleTheme = (darkMode) => {
    const db = firebase.firestore()
    this.setState({ darkMode })

    firebase.auth().onAuthStateChanged((user) => {
      db.collection("user").doc(user.uid).update({
        DarkMode: this.state.darkMode,
      })
    })
  }

  handleNotify = (notification) => {
    this.setState({ notification })
  }
  handleLocation = (location) => {
    this.setState({ location })
  }
  handleSubscribe = (subscribe) => {
    this.setState({ subscribe })
  }

  render() {
    return (
      <div className="appearance-container">
        <h2>Appearance</h2>

        <div className="toggle-container">
          <div>
            <h4>Symptom Status</h4>
            <p>For demo purpose, user could change by themselves</p>
          </div>
          <Manage />
        </div>

        <div className="toggle-container">
          <div>
            <h4>Enable Dark Mode</h4>
            <p>Chang the app UI to dark theme</p>
          </div>
          <Switch
            onChange={this.handleTheme}
            checked={this.state.darkMode}
            className="react-switch"
          />
          {/* <button id="dark-mode-switch">Dark Mode</button> */}
        </div>

        <div className="toggle-container">
          <div>
            <h4>Enable Notification</h4>
            <p>
              Shows a red badge on the app icon when you have unread messages
            </p>
          </div>
          <Switch
            onChange={this.handleNotify}
            checked={this.state.notification}
            className="react-switch"
          />
        </div>

        <div className="toggle-container">
          <div>
            <h4>Enable My Location Access</h4>
            <p>
              QuarAid will access your location to display the heatmap of
              covid-19
            </p>
          </div>
          <Switch
            onChange={this.handleLocation}
            checked={this.state.location}
            className="react-switch"
          />
        </div>

        {/* <div className="toggle-container">
          <div>
            <h4>Disable Email Subscription</h4>
            <p>Unscribe all the email notification from QuarAid</p>
          </div>
          <Switch
            onChange={this.handleSubscribe}
            checked={this.state.subscribe}
            className="react-switch"
          />
        </div> */}
      </div>
    )
  }
}

export default Appearance
