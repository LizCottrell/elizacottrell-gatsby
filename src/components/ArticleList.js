import React from "react";

class ArticleList extends React.Component {
  render() {
    return (
      <li className="article">
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">
          <img src={this.props.image} alt="" />
          <h3>{this.props.title}</h3>
          <p>{this.props.date}</p>
        </a>
      </li>
    );
  }
}

export default ArticleList;
