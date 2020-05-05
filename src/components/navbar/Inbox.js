import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Badge from "@material-ui/core/Badge"
import NotificationsIcon from "@material-ui/icons/Notifications"
import MailIcon from "@material-ui/icons/Mail"

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}))

export default function SimpleBadge() {
  const classes = useStyles()
  const [inboxShow, setInbox] = useState(false)
  const [notifyShow, setNotify] = useState(false)

  function inboxToggle() {
    setInbox((prevShow) => !prevShow)
  }

  function notifyToggle() {
    setNotify((prevShow) => !prevShow)
  }

  return (
    <div className={classes.root}>
      <div className="badge-item-container">
        <div className="badge-item">
          <Badge badgeContent={4} color="primary">
            <button onClick={inboxToggle}>
              <MailIcon />
            </button>
          </Badge>
          {inboxShow === true ? (
            <div className="nav-pop-modal">
              <ul>
                <li>
                  <i className="fas fa-envelope"></i>You test result is out.
                </li>
                <li>
                  <i className="fas fa-envelope"></i>We received your sympt..
                </li>
                <li>
                  <i className="fas fa-envelope"></i>Welcome to NoEpidemic!
                </li>
              </ul>
            </div>
          ) : null}
        </div>

        <div className="badge-item">
          <Badge badgeContent={2} color="primary">
            <button onClick={notifyToggle}>
              <NotificationsIcon />
            </button>
          </Badge>
          {notifyShow === true ? (
            <div className="nav-pop-modal">
              <ul>
                <li>
                  <i className="fas fa-bell"></i>BC cancel all gatherings...
                </li>
                <li>
                  <i className="fas fa-bell"></i>Started on July, all school...
                </li>
                <li>
                  <i className="fas fa-bell"></i>BC announces that student...
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
