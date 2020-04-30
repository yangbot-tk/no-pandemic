import React from "react"
import RecommendationItem from "./RecommendationItem"

function Recommendation() {
  return (
    <div className="recommendation-container">
      <h2>Recommendation</h2>
      <div className="recommendation-item-container">
        <RecommendationItem
          image="/images/recommendation/oximeter.png"
          title="User Oximeter"
          content="Normal pulse oximeter readings usually range from 95 to 100 percent."
        />
        <RecommendationItem
          image="/images/recommendation/thermometer.png"
          title="Monitor Yourself"
          content="Check your temperature when you feel sick"
        />
        <RecommendationItem
          image="/images/recommendation/exercise.png"
          title="Keep Exercise"
          content="Doing regular exercise could improve your immune system"
        />
        <RecommendationItem
          image="/images/recommendation/vegetable.png"
          title="Eat Vegetables"
          content="Eat a variety of vegetables to satisfy the vitmin that your body need"
        />
      </div>
    </div>
  )
}

export default Recommendation
