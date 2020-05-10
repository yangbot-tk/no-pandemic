import React, { useState, useEffect } from "react"
import UserNav from "../UserNav"
// import $ from "jquery"
import Gallery from "react-grid-gallery"
import Loading from "../Loading"
import firebase from "firebase"
import HeroShowCase from "./HeroShowCase"
import HeroDonate from "./HeroDonate"

function Hero() {
  let photoList = []

  const [photo, setPhoto] = useState([])
  const [loading, setLoading] = useState(false)
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
    }, 2000)
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
              <h2>Heros of the Pandemic</h2>
              <p>
                As the COVID-19 pandemic continues to squeeze Ontario's health
                system, Dr. Gray Moonen has watched proudly as his colleagues
                have risen to the occasion — but at the same time, he's seen
                their morale fall
              </p>
              <Gallery id="hero-gallery" images={photo} margin={0} />
            </div>
            <HeroDonate />
          </div>
        )}
      </div>
    </div>
  )
}

export default Hero
