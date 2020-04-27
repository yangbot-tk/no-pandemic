import React, { Component } from "react"
import Switch from "react-switch"

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

  handleTheme = (darkMode) => {
    this.setState({ darkMode })
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
            <h4>Enable Dark Mode</h4>
            <p>Chang the app UI to dark theme</p>
          </div>
          <Switch
            onChange={this.handleTheme}
            checked={this.state.darkMode}
            className="react-switch"
          />
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

        <div className="toggle-container">
          <div>
            <h4>Disable Email Subscription</h4>
            <p>Unscribe all the email notification from QuarAid</p>
          </div>
          <Switch
            onChange={this.handleSubscribe}
            checked={this.state.subscribe}
            className="react-switch"
          />
        </div>
      </div>
    )
  }
}

export default Appearance
