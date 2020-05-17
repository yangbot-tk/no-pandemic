import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  root: {
    width: 380,
    height: 260,
  },
  media: {
    height: 130,
  },
})

const darkSurface = {
  backgroundColor: "#333",
}

const darkText = {
  color: "white",
}

const darkSecondaryText = {
  color: "rgba(255, 255, 255, 0.5)",
}

const darkLink = {
  color: "rgb(31, 100, 184)",
}

export default function MediaCard(props) {
  const classes = useStyles()

  return (
    <div className="forum-item">
      <Card
        className={classes.root}
        style={props.theme === true ? darkSurface : null}
      >
        <CardActionArea>
          <CardMedia className={classes.media} image={props.imgUrl} />
          <CardContent>
            <div className="verified-title">
              <img
                className="verified-icon"
                src="/images/verified.png"
                alt="verified"
                width="20px"
                height="20px"
              />
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={props.theme === true ? darkText : null}
              >
                {props.title}
              </Typography>
            </div>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={props.theme === true ? darkSecondaryText : null}
            >
              {props.info}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            style={props.theme === true ? darkLink : null}
          >
            {props.member} members
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
