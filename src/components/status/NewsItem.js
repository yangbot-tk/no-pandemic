import React, { Component } from "react"

class NewsItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opacity: 0,
    }
    this.handleOn = this.handleOn.bind(this)
    this.handleOff = this.handleOff.bind(this)
  }

  handleOn() {
    this.setState((prevState) => {
      return {
        opacity: 1,
      }
    })
  }

  handleOff() {
    this.setState((prevState) => {
      return {
        opacity: 0,
      }
    })
  }

  render() {
    let sampleImage =
      this.props.article.urlToImage === ""
        ? "images/sample.jpg"
        : this.props.article.urlToImage
    return (
      <div
        className="news-item"
        onMouseEnter={this.handleOn}
        onMouseLeave={this.handleOff}
      >
        <img src={sampleImage} alt="news" />

        <p className="blog-title">{this.props.article.title}</p>
        <p className="blog-author">{this.props.article.author}</p>

        <div
          style={{ opacity: this.state.opacity }}
          className="hover-container"
        >
          <div className="overlay"></div>
          <a href={this.props.article.url}>Read More</a>
        </div>
      </div>
    )
  }
}

export default NewsItem
