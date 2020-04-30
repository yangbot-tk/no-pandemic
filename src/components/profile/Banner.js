import React from "react"
import firebase from "firebase"
import $ from "jquery"

function Banner(props) {
  function handleImg() {
    const db = firebase.firestore()
    const storageRef = firebase.storage().ref()
    let file = $("#profile-input").prop("files")[0]
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
  }

  return (
    <div className="profile-banner">
      <div className="profile-user">
        <img src={props.profileUrl} alt="user-profile" />
        <h3>{props.name}</h3>
      </div>
      <input id="profile-input" type="file" />
      <button onClick={handleImg}>Upload</button>
    </div>
  )
}

export default Banner
