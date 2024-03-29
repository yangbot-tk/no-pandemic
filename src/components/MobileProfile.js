import React, { useState } from "react"
import { Link } from "react-router-dom"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import firebase from "firebase"

// Source code from Material UI
export default function SimpleMenu() {
  const profileStyle = {
    borderRadius: "50%",
  }

  const [anchorEl, setAnchorEl] = useState(null)
  const [profileUrl, setProfileUrl] = useState("/images/user.jpg")
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
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
      <a aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <img
          style={profileStyle}
          src={profileUrl}
          alt="user-profile"
          width="25px"
          height="25px"
        />
      </a>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
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
