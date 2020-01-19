import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

class ArticleList extends React.Component {
  render() {
    return (
      <li className="article">
        <OutboundLink
          href={this.props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={this.props.image} alt="" />
          <h3>{this.props.title}</h3>
          <p>{this.props.date}</p>
        </OutboundLink>
      </li>
    )
  }
}

export default ArticleList
