import React, { useState, useEffect } from "react"
import UserNav from "../UserNav"
import $ from "jquery"

function Hero() {
  let photoList = []

  const [photo, setPhoto] = useState([])
  useEffect(() => {
    for (let i = 1; i <= 133; i++) {
      let heroImg = $("<img id=hero-" + i + " src=/images/hero/hero" + i + ".jpg alt=hers/>")
      $(".hero-wrap").append(heroImg)

      $("<img id=hero-" + i + " src=/images/hero/hero" + i + ".jpg alt=hers/>").on('load', () => {
        photoList.push({ src: `/images/hero/hero${i}.jpg`, width: $("#hero-" + i).width(), height: $("#hero-" + i).height()})
      })
      
    }
    setPhoto(photoList)
  }, [])

  console.log(photo)

  return (
    <div className="main-container">
      <UserNav title="Hero Dashboard" />

      <div className="content-container">
        <div className="hero-wrap"></div>
      </div>
    </div>
  )
}

export default Hero
