import React, { useState } from "react"
import firebase from "firebase"
import $ from "jquery"
import Feedback from "../Feedback"
import Progress from "../Progress"

function Banner(props) {
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  function offError() {
    setError(false)
  }

  function handleImg() {
    setLoading(true)
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
          setLoading(false)
          setShow(true)
        })
    } else {
      setLoading(false)
      setError(true)
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

      {loading === true ? <Progress /> : null}
      {show === true ? (
        <Feedback
          msg="Success"
          info="Your profile has been changed!"
          imgUrl="/images/success.png"
        />
      ) : null}

      {error === true ? (
        <div className="feedback-container">
          <div>
            <img src="/images/error.png" alt="feedback info" />
            <h3>Error</h3>
            <p>Please change your profile picture.</p>
            <button onClick={setError}>OK</button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Banner
