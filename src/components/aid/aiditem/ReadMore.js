import React, { useState, useEffect } from "react"
import ReadMoreItem from "./ReadMoreItem"
import firebase from "firebase"

function ReadMore() {
  const db = firebase.firestore()
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      db.collection("user")
        .doc(user.uid)
        .onSnapshot((doc) => {
          setDarkMode(doc.data().DarkMode)
        })
    })
  }, [])

  const darkText = {
    color: "white",
  }

  return (
    <div className="readmore-container">
      <div className="aid-module-header">
        <h3 style={darkMode === true ? darkText : null}>Read More</h3>
      </div>
      <div className="readmore-resource-container">
        <ReadMoreItem
          imgUrl="/images/bcbanner.jpg"
          title="Provincial Health Services Authority"
          content="Offical resource from BC Provincial Health Authority"
          link="http://www.bccdc.ca/health-info/diseases-conditions/covid-19"
          theme={darkMode}
        />
        <ReadMoreItem
          imgUrl="/images/canadabanner.jpg"
          title="Government of Canada"
          content="Offical resource from Government of Canada"
          link="https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19.html"
          theme={darkMode}
        />
        <ReadMoreItem
          imgUrl="/images/whobanner.jpg"
          title="World Health Organization"
          content="Offical resource from World Health Organization"
          link="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
          theme={darkMode}
        />
      </div>
    </div>
  )
}

export default ReadMore
