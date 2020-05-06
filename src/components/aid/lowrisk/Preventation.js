import React from "react"
import PreventItem from "./PreventationItem"

function Preventation() {
  return (
    <div className="prevent-container">
      <h2>What are some preventation strategies</h2>
      <div className="prevent-item-container">
        <PreventItem
          title={"Wash your hands frequently"}
          info={
            "Wash your hands with soap and water or an alcohol-based hand sanitizer"
          }
          image={"/images/service1.png"}
        />
        <PreventItem
          title={"Wear face masks if necessary"}
          info={
            "Avoid unprotected contact with the patient and wear face masks if having direct contact"
          }
          image={"/images/service2.png"}
        />
        <PreventItem
          title={"Protect others"}
          info={
            "Cover your nose and mouth completely with a tissue or cuff when you cough or sneeze"
          }
          image={"/images/service3.png"}
        />
        <PreventItem
          title={"Cook meat thrughly"}
          info={
            "Meat products should be cooked thoroughly and handled properly"
          }
          image={"/images/service4.png"}
        />
        <PreventItem
          title={"Avoid direct with animals"}
          info={
            "Wash hands with soap and water after handling animals and animal products"
          }
          image={"/images/service5.png"}
        />
        <PreventItem
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
