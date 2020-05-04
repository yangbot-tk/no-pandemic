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

export default function ImgMediaCard(props) {
  const classes = useStyles()

  return (
    <div className="readmore-resource-item">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="bc banner"
            height="180"
            image={props.imgUrl}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.content}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <a href={props.link}>Read More</a>
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
