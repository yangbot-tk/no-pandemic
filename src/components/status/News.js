import React, { Component } from "react"
import NewsItem from "./NewsItem"

class News extends Component {
  constructor() {
    super()
    this.state = {
      article: [],
    }
  }

  componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?" +
      "q=Coronavirus&" +
      "sortBy=popularity&" +
      "apiKey=6cb597ddd50f4a468d2c0f19ec397a74"
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          article: [...this.state.article, data.articles[0], data.articles[1]],
        })
      })
  }
  render() {
    console.log(this.state.article)
    const articleComponent = this.state.article.map((item) => (
      <NewsItem key={item.url} article={item} />
    ))

    return (
      <div className="news-container">
        <div className="news-item-container">{articleComponent}</div>
      </div>
    )
  }
}

export default News
