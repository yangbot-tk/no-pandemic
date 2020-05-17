import React from "react"
import SpreadItem from "./SpreadItem"

function Spread(props) {
  const darkText = {
    color: "white",
  }

  const darkSecondaryText = {
    color: "rgba(255, 255, 255, 0.5)",
  }

  return (
    <div className="spread-container">
      <div className="aid-module-header">
        <h3 style={props.theme === true ? darkText : null}>
          How do you get infected?
        </h3>
        <p style={props.theme === true ? darkSecondaryText : null}>
          COVID-19 is mainly transmitted through droplets or touch the
          contaminated surfaces.
        </p>
      </div>
      <div className="spread-item-container">
        <SpreadItem
          theme={props.theme}
          image="/images/spread1.png"
          title="Direct Transmission"
          content="The patient sneezes, coughs, and speaks in droplets, and exhales air
        that is inhaled at close range to cause the infection"
        />
        <SpreadItem
          theme={props.theme}
          image="/images/spread2.png"
          title="Aerosol Transmission"
          content="Droplets mix in the air to form aerosols, which cause infection when
        inhaled"
        />
        <SpreadItem
          theme={props.theme}
          image="/images/spread3.png"
          title="Contact Transmission"
          content="Droplets deposited on the surface of objects, contact with contaminated
        hands, and then contact with the mouth, nose, eyes and other mucous
        membranes, resulting in infection"
        />
      </div>
    </div>
  )
}

export default Spread
