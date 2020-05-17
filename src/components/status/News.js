import React, { Component } from "react"
import NewsCard from "./NewsCard"

class News extends Component {
  constructor(props) {
    super(props)
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
      .map((item) => (
        <NewsCard key={item.url} article={item} theme={this.props.theme} />
      ))

    const articleAll = this.state.article.map((item) => (
      <NewsCard key={item.url} article={item} theme={this.props.theme} />
    ))

    const darkText = {
      color: "white",
    }

    const darkSurface = {
      backgroundColor: "#333",
    }

    const darkBackground = {
      backgroundColor: "#121212",
    }

    return (
      <div className="news-container">
        {/* 预览新闻模块 */}
        <h3 style={this.props.theme === true ? darkText : null}>
          RELATED NEWS
        </h3>
        <div className="news-item-container">{articlePreview}</div>
        <div className="news-btn">
          <button
            style={this.props.theme === true ? darkSurface : null}
            onClick={this.displayAllNews}
          >
            View More
          </button>
        </div>

        {/* 点击按钮显示全部新闻模块 */}
        {this.state.showArticle === true ? (
          <div
            style={this.props.theme === true ? darkBackground : null}
            className="news-modal-container"
          >
            <div
              style={this.props.theme === true ? darkSurface : null}
              className="news-modal-header"
            >
              <button
                style={this.props.theme === true ? darkSurface : null}
                onClick={this.hideAllNews}
              >
                Go Back
              </button>
              <h2 style={this.props.theme === true ? darkText : null}>
                COVID-19 Latest News
              </h2>
              <button style={this.props.theme === true ? darkSurface : null}>
                Subscribe
              </button>
            </div>
            <div className="news-modal-content">{articleAll}</div>
          </div>
        ) : null}
      </div>
    )
  }
}

export default News
