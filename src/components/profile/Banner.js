import React, { Component } from "react"
import firebase from "firebase"
import $ from "jquery"

class Banner extends Component {
  constructor() {
    super()
    this.state = {
      profileUrl: "/images/user.jpg",
    }
  }

  componentDidMount() {
    const db = firebase.firestore()
    firebase.auth().onAuthStateChanged((user) => {
      db.collection("user")
        .doc(user.uid)
        .get()
        .then((snap) => {
          this.setState({
            profileUrl: snap.data().Profile,
          })
        })
    })
  }

  handleImg = () => {
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
        this.setState({
          profileUrl: url,
        })
        firebase.auth().onAuthStateChanged((user) => {
          db.collection("user").doc(user.uid).update({
            Profile: url,
          })
        })
      })
  }

  render() {
    return (
      <div className="profile-banner">
        <div className="profile-user">
          <img src={this.state.profileUrl} alt="user-profile" />
          <h3>Yang Li</h3>
        </div>
        <input id="profile-input" type="file" />
        <button onClick={this.handleImg}>Upload</button>
      </div>
    )
  }
}

export default Banner
