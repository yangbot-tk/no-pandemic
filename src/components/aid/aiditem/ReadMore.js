import React from "react"
import ReadMoreItem from "./ReadMoreItem"

function ReadMore() {
  return (
    <div className="readmore-container">
      <div className="aid-module-header">
        <h2>Read More</h2>
      </div>
      <div className="readmore-resource-container">
        <ReadMoreItem
          imgUrl="/images/bcbanner.jpg"
          title="Provincial Health Services Authority"
          content="Offical resource from BC Provincial Health Authority"
          link="http://www.bccdc.ca/health-info/diseases-conditions/covid-19"
        />
        <ReadMoreItem
          imgUrl="/images/canadabanner.jpg"
          title="Provincial Health Services Authority"
          content="Offical resource from Government of Canada"
          link="https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19.html"
        />
        <ReadMoreItem
          imgUrl="/images/whobanner.jpg"
          title="Provincial Health Services Authority"
          content="Offical resource from World Health Organization"
          link="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
        />
      </div>
    </div>
  )
}

export default ReadMore
