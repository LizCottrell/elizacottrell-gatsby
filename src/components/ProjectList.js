import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

class ProjectList extends React.Component {
  render() {
    return (
      <li className="project">
        <img src={this.props.image} alt="" />
        <div>
          <div className="project__header">
            <h3>{this.props.title}</h3>
            <div className="project__icons">
              {this.props.github && (
                <OutboundLink
                  href={this.props.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github" />
                  <span className="sr-only">{this.props.title} Github</span>
                </OutboundLink>
              )}
              {this.props.url && (
                <OutboundLink
                  href={this.props.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-external-link" />
                  <span className="sr-only">{this.props.title}</span>
                </OutboundLink>
              )}
            </div>
          </div>
          <p dangerouslySetInnerHTML={{ __html: this.props.text }} />
          <ul className="project__pills">
            {this.props.design && <li>Design</li>}
            {this.props.development && <li>Development</li>}
          </ul>
        </div>
      </li>
    )
  }
}

export default ProjectList
