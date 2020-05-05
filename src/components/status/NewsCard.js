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
    maxWidth: 320,
    height: 250,
  },
  media: {
    height: 140,
  },
})

export default function MediaCard(props) {
  const classes = useStyles()
  let sampleImage =
    props.article.urlToImage === ""
      ? "/images/sample.jpg"
      : props.article.urlToImage

  let newsTitle =
    props.article.title.length > 90
      ? props.article.title.substring(0, 90) + "..."
      : props.article.title

  return (
    <div className="news-item">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={sampleImage}
            title={props.article.title}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {newsTitle}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            <a href={props.article.url}>Read More</a>
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
