import React, { useState, useEffect } from "react"
import UserNav from "../UserNav"
// import $ from "jquery"
import Gallery from "react-grid-gallery"
import Loading from "../Loading"
import firebase from "firebase"
import HeroShowCase from "./HeroShowCase"
import HeroDonate from "./HeroDonate"
import ScrollBtn from "../ScrollBtn"

function Hero() {
  let photoList = []

  const [photo, setPhoto] = useState([])
  const [loading, setLoading] = useState(true)
  const db = firebase.firestore()

  useEffect(() => {
    setTimeout(() => {
      db.collection("hero")
        .doc("Doc")
        .get()
        .then((snap) => {
          setPhoto(snap.data().heroList)
        })

      // for (let i = 1; i <= 133; i++) {
      //   var img = new Image()
      //   img.src = `/images/hero/hero${i}.jpg`
      //   photoList.push({
      //     src: `/images/hero/hero${i}.jpg`,
      //     thumbnail: `/images/hero/hero${i}.jpg`,
      //     thumbnailWidth: img.width,
      //     thumbnailHeight: img.height,
      //   })
      // }
      // setPhoto(photoList)
      setLoading(false)
    }, 3000)
  }, [])

  console.log(photoList)
  return (
    <div className="main-container">
      <UserNav title="Hero Dashboard" />

      <div className="hero-container">
        {loading === true ? (
          <Loading />
        ) : (
          <div className="hero-content-container">
            <HeroShowCase />
            <div className="hero-gallery-container">
              <div className="hero-gallery-text">
                <div>
                  <h2>Heros of the Pandemic</h2>
                  <p>
                    As the COVID-19 pandemic continues to squeeze Ontario's
                    health system, Dr. Gray Moonen has watched proudly as his
                    colleagues have risen to the occasion — but at the same
                    time, he's seen their morale fall
                  </p>
                </div>
              </div>
              <Gallery id="hero-gallery" images={photo} margin={1} />
            </div>
            <HeroDonate />
            <ScrollBtn />
          </div>
        )}
      </div>
    </div>
  )
}

export default Hero
