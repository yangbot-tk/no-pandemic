import React, { Component } from "react"
import GlobalItem from "./GlobalItem"

class Global extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      totConfirmed: 0,
      totRecovered: 0,
      totDeath: 0,
      newConfirmed: 0,
      newRecovered: 0,
      newDeath: 0,
    }
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch("https://api.covid19api.com/summary")
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          this.setState({
            loading: false,
            totConfirmed: data.Global.TotalConfirmed,
            totRecovered: data.Global.TotalRecovered,
            totDeath: data.Global.TotalDeaths,
            newConfirmed: data.Global.NewConfirmed,
            newRecovered: data.Global.NewRecovered,
            newDeath: data.Global.NewDeaths,
          })
        }
      })
  }
  render() {
    const darkSurface = {
      backgroundColor: "#333",
    }

    const darkText = {
      color: "white",
    }

    return (
      <div className="global-container">
        <div
          style={this.props.theme === true ? darkSurface : null}
          className="global-item-container"
        >
          <div className="global-item-intro">
            <img src="/images/global.png" alt="global" />
            <h3 style={this.props.theme === true ? darkText : null}>GLOBAL</h3>
          </div>

          <GlobalItem
            text="Total Confirmed"
            number={this.state.totConfirmed}
            dailyNum={this.state.newConfirmed}
            theme={this.props.theme}
          />
          <GlobalItem
            text="Total Recovered"
            number={this.state.totRecovered}
            dailyNum={this.state.newRecovered}
            theme={this.props.theme}
          />
          <GlobalItem
            text="Total Deaths"
            number={this.state.totDeath}
            dailyNum={this.state.newDeath}
            theme={this.props.theme}
          />
        </div>
      </div>
    )
  }
}

export default Global
