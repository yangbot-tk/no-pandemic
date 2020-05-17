import React from "react"
import PreventItem from "./PreventationItem"

function Preventation(props) {
  const darkText = {
    color: "white",
  }

  const darkSecondaryText = {
    color: "rgba(255, 255, 255, 0.5)",
  }

  return (
    <div className="prevent-container">
      <div className="aid-module-header">
        <h3 style={props.theme === true ? darkText : null}>
          Preventation Strategies
        </h3>
        <p style={props.theme === true ? darkSecondaryText : null}>
          The guidelines below are recommended by World Health Organization. For
          more information, you can view in read more section
        </p>
      </div>
      <div className="prevent-item-container">
        <PreventItem
          theme={props.theme}
          title={"Wash your hands frequently"}
          info={
            "Wash your hands with soap and water or an alcohol-based hand sanitizer"
          }
          image={"/images/service1.png"}
        />
        <PreventItem
          theme={props.theme}
          title={"Wear face masks if necessary"}
          info={
            "Avoid unprotected contact with the patient and wear face masks if having direct contact"
          }
          image={"/images/service2.png"}
        />
        <PreventItem
          theme={props.theme}
          title={"Protect others"}
          info={
            "Cover your nose and mouth completely with a tissue or cuff when you cough or sneeze"
          }
          image={"/images/service3.png"}
        />
        <PreventItem
          theme={props.theme}
          title={"Cook meat thrughly"}
          info={
            "Meat products should be cooked thoroughly and handled properly"
          }
          image={"/images/service4.png"}
        />
        <PreventItem
          theme={props.theme}
          title={"Avoid direct with animals"}
          info={
            "Wash hands with soap and water after handling animals and animal products"
          }
          image={"/images/service5.png"}
        />
        <PreventItem
          theme={props.theme}
          title={"Seek for medical help"}
          info={
            "If you develop symptoms, contact your family doctor or hospital immediately"
          }
          image={"/images/service6.png"}
        />
      </div>
    </div>
  )
}

export default Preventation
