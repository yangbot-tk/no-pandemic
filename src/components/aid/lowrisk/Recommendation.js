import React from "react"
import RecommendationItem from "./RecommendationItem"

function Recommendation(props) {
  const darkText = {
    color: "white",
  }

  return (
    <div className="recommendation-container">
      <h3 style={props.theme === true ? darkText : null}>Recommendation</h3>
      <div className="recommendation-item-container">
        <RecommendationItem
          theme={props.theme}
          image="/images/recommendation/oximeter.png"
          title="User Oximeter"
          content="Normal pulse oximeter readings usually range from 95 to 100 percent."
        />
        <RecommendationItem
          theme={props.theme}
          image="/images/recommendation/thermometer.png"
          title="Monitor Yourself"
          content="Check your temperature when you feel sick"
        />
        <RecommendationItem
          theme={props.theme}
          image="/images/recommendation/exercise.png"
          title="Keep Exercise"
          content="Doing regular exercise could improve your immune system"
        />
        <RecommendationItem
          theme={props.theme}
          image="/images/recommendation/vegetable.png"
          title="Eat Vegetables"
          content="Eat a variety of vegetables to satisfy the vitmin that your body need"
        />
      </div>
    </div>
  )
}

export default Recommendation
