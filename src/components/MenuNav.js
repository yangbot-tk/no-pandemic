import React, { useState } from "react"
import { Link } from "react-router-dom"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import firebase from "firebase"
import $ from "jquery"

// Source code from Material UI
export default function SimpleMenu() {
  const profileStyle = {
    borderRadius: "50%",
  }

  const [anchorEl, setAnchorEl] = useState(null)
  const [profileUrl, setProfileUrl] = useState("/images/user.jpg")
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
    $(".navbar").css("opacity", "1")
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const db = firebase.firestore()
  firebase.auth().onAuthStateChanged((user) => {
    db.collection("user")
      .doc(user.uid)
      .get()
      .then((snap) => {
        if (snap.data().Profile === undefined) {
          setProfileUrl("/images/user.jpg")
        } else {
          setProfileUrl(snap.data().Profile)
        }
      })
  })

  return (
    <div>
      <a
        className="game-exit-btn"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <i className="fas fa-bars"></i>Menu
      </a>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/signin/home">
          <MenuItem>Home</MenuItem>
        </Link>

        <Link to="/signin/symptom">
          <MenuItem>Symptom</MenuItem>
        </Link>
        <Link to="/signin/aid">
          <MenuItem>Aid</MenuItem>
        </Link>
        <Link to="/signin/profile">
          <MenuItem>Profile</MenuItem>
        </Link>

        <Link to="/signin/status">
          <MenuItem>Status</MenuItem>
        </Link>

        <Link to="/signin/hero">
          <MenuItem>Hero</MenuItem>
        </Link>

        <Link to="/signin" onClick={() => firebase.auth().signOut()}>
          <MenuItem>Logout</MenuItem>
        </Link>
      </Menu>
    </div>
  )
}
