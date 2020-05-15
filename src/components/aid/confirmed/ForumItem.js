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

export default function MediaCard(props) {
  const classes = useStyles()

  return (
    <div className="forum-item">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={props.imgUrl} />
          <CardContent>
            <div className="verified-title">
              <img
                className="verified-icon"
                src="/images/verified.png"
                alt="verified"
                width="25px"
                height="25px"
              />
              <Typography gutterBottom variant="h5" component="h2">
                {props.title}
              </Typography>
            </div>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.info}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            {props.member} members
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
