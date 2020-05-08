import React from "react"
import { Link } from "react-router-dom"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import firebase from "firebase"

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <a aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <img
          src="/images/user.jpg"
          alt="user-profile"
          width="30px"
          height="30px"
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

        <Link to="/signin/profile">
          <MenuItem>My account</MenuItem>
        </Link>

        <Link to="/signin" onClick={() => firebase.auth().signOut()}>
          <MenuItem>Logout</MenuItem>
        </Link>
      </Menu>
    </div>
  )
}
