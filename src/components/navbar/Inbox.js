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
  const [show, setShow] = useState(false)

  function navToggle() {
    setShow((prevShow) => !prevShow)
  }

  return (
    <div className={classes.root}>
      <div className="badge-item-container">
        <div className="badge-item">
          <Badge badgeContent={4} color="primary">
            <button onClick={navToggle}>
              <MailIcon />
            </button>
          </Badge>
        </div>

        {show === true ? <p>测试用</p> : null}

        <div className="badge-item">
          <Badge badgeContent={2} color="primary">
            <button onClick={navToggle}>
              <NotificationsIcon />
            </button>
          </Badge>
        </div>
      </div>
    </div>
  )
}
