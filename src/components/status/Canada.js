import React, { Component } from "react"
import CanadaItem from "./CanadaItem"

class Canada extends Component {
  constructor() {
    super()
    this.state = {
      confirmed: 0,
      recovered: 0,
      death: 0,
    }
  }

  componentDidMount() {
    fetch("https://covid19.mathdro.id/api/countries/canada")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          confirmed: data.confirmed.value,
          recovered: data.recovered.value,
          death: data.deaths.value,
        })
        console.log(data)
      })
  }

  render() {
    return (
      <div className="canada-container">
        <CanadaItem text="Confirmed" number={this.state.confirmed} />
        <CanadaItem text="Recovered" number={this.state.recovered} />
        <CanadaItem text="Deaths" number={this.state.death} />
      </div>
    )
  }
}

export default Canada
