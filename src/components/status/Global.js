import React, { Component } from "react"
import GlobalItem from "./GlobalItem"

class Global extends Component {
  constructor() {
    super()
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
        this.setState({
          loading: false,
          totConfirmed: data.Global.TotalConfirmed,
          totRecovered: data.Global.TotalRecovered,
          totDeath: data.Global.TotalDeaths,
          newConfirmed: data.Global.NewConfirmed,
          newRecovered: data.Global.NewRecovered,
          newDeath: data.Global.NewDeaths,
        })
        console.log(data.Global)
      })
  }
  render() {
    return (
      <div className="global-container">
        <div className="global-item-container">
          <GlobalItem
            text="Total Confirmed"
            number={this.state.totConfirmed}
            dailyNum={this.state.newConfirmed}
          />
          <GlobalItem
            text="Total Recovered"
            number={this.state.totRecovered}
            dailyNum={this.state.newRecovered}
          />
          <GlobalItem
            text="Total Deaths"
            number={this.state.totDeath}
            dailyNum={this.state.newDeath}
          />
        </div>
      </div>
    )
  }
}

export default Global
