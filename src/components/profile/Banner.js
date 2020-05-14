import React, { useState } from "react"
import firebase from "firebase"
import $ from "jquery"

function Banner(props) {
  function handleImg() {
    const db = firebase.firestore()
    const storageRef = firebase.storage().ref()
    let file = $("#profile-input").prop("files")[0]
    if (file) {
      let metadata = {
        contentType: file.type,
      }

      let task = storageRef.child(file.name).put(file, metadata)
      task
        .then((snapshot) => snapshot.ref.getDownloadURL())
        .then((url) => {
          console.log("用户头像上传成功 链接为: " + url)

          firebase.auth().onAuthStateChanged((user) => {
            db.collection("user").doc(user.uid).update({
              Profile: url,
            })
          })
        })
    } else {
      alert("!!!!")
    }
  }
  return (
    <div className="profile-banner">
      <div className="profile-user">
        <div className="profile-image">
          <div className="profile-overlay"></div>
          <img src={props.profileUrl} alt="user-profile" />
        </div>
        <h3>{props.name}</h3>
      </div>

      <div className="profile-upload">
        <input id="profile-input" name="profile-input" type="file" />

        <label for="profile-input">
          <img src="/images/camera.png" alt="change pic" />
        </label>

        <button onClick={handleImg}>Upload</button>
      </div>
    </div>
  )
}

export default Banner
