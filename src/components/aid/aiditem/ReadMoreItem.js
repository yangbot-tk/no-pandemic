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
    width: 370,
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

export default function ImgMediaCard(props) {
  const classes = useStyles()

  return (
    <div className="readmore-resource-item">
      <Card
        className={classes.root}
        style={props.theme === true ? darkSurface : null}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            alt="bc banner"
            height="180"
            image={props.imgUrl}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={props.theme === true ? darkText : null}
            >
              {props.title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={props.theme === true ? darkSecondaryText : null}
            >
              {props.content}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <a href={props.link} style={props.theme === true ? darkText : null}>
              Read More
            </a>
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
