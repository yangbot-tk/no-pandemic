import React, { Component } from "react"
import NewsCard from "./NewsCard"

class News extends Component {
  constructor() {
    super()
    this.state = {
      article: [],
      showArticle: false,
    }
  }

  displayAllNews = () => {
    this.setState({
      showArticle: true,
    })
  }

  hideAllNews = () => {
    this.setState({
      showArticle: false,
    })
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
          article: data.articles,
        })
      })
  }
  render() {
    // console.log(this.state.article)
    const prevSize = 2
    const articlePreview = this.state.article
      .slice(0, prevSize)
      .map((item) => <NewsCard key={item.url} article={item} />)

    const articleAll = this.state.article.map((item) => (
      <NewsCard key={item.url} article={item} />
    ))
    return (
      <div className="news-container">
        {/* 预览新闻模块 */}
        <h3>Related News</h3>
        <div className="news-item-container">{articlePreview}</div>
        <div className="news-btn">
          <button onClick={this.displayAllNews}>View More</button>
        </div>

        {/* 点击按钮显示全部新闻模块 */}
        {this.state.showArticle === true ? (
          <div className="news-modal-container">
            <div className="news-modal-header">
              <button onClick={this.hideAllNews}>Go Back</button>
              <h2>COVID-19 Latest News</h2>
              <button>Subscribe</button>
            </div>
            <div className="news-modal-content">{articleAll}</div>
          </div>
        ) : null}
      </div>
    )
  }
}

export default News
