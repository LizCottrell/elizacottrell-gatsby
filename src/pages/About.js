import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleList from "../components/articleList"
import timeline from "../data/timeline.js"
import articles from "../data/articles.js"
import events from "../data/events.js"

class About extends Component {
  constructor(props) {
    super(props)
    this.top = React.createRef()
    this.timeline = React.createRef()
    this.events = React.createRef()
    this.articles = React.createRef()
  }

  scroll(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" })
  }

  render() {
    return (
      <Layout>
        <SEO title="About" />
        <div className="about container" ref={this.top}>
          <section>
            <header className="about__header">
              <h1>About me</h1>

              <div className="pills">
                <button
                  onClick={() => {
                    this.scroll(this.timeline)
                  }}
                >
                  Timeline
                </button>
                <button
                  onClick={() => {
                    this.scroll(this.articles)
                  }}
                >
                  Articles
                </button>
                <button
                  onClick={() => {
                    this.scroll(this.events)
                  }}
                >
                  Events
                </button>
              </div>
            </header>

            <p>
              I’m a former archaeologist and{" "}
              <button
                className="button-link"
                onClick={() => {
                  this.scroll(this.timeline)
                }}
              >
                self-taught full-stack front end developer
              </button>{" "}
              from Philadelphia. I work with HTML, CSS, and JavaScript creating
              accessible, performant, and accessible single-page applications in
              an agile environment. I get to collaborate daily with
              cross-functional teams of technical leads, developers, UX
              designers, and researchers.
            </p>
            <p>
              My transition into web development began with community
              organizations and local tech meetups like Girl Develop It. I
              taught myself how to code on nights and weekends. Now{" "}
              <button
                className="button-link"
                onClick={() => {
                  this.scroll(this.events)
                }}
              >
                I teach, speak, volunteer, TA, and organize events in the tech
                community
              </button>
              . I found there more value in a classroom, lecture, panel or event
              as opposed to sitting alone in front of a computer trying to hack
              it on my own. Because of the enormous amount of support I received
              when I started out, I began giving back as soon as I could.
            </p>
            <p>
              This site is intended to give a small window into my transition
              from archaeologist to technologist. Throughout this career switch,
              I've discovered my passion projects are web accessibility and
              motivating people of all backgrounds looking to break into tech.
            </p>
          </section>

          <section id="timeline" ref={this.timeline}>
            <header>
              <h2>Timeline</h2>
              <button
                className="button-icon"
                onClick={() => {
                  this.scroll(this.top)
                }}
              >
                <i className="fa fa-arrow-up" />
                <span className="sr-only">Back to top</span>
              </button>
            </header>
            <ul className="timeline__list">
              {timeline.map((milestone, index) => {
                return (
                  <li key={index}>
                    <strong>{milestone.date}</strong> –{" "}
                    <span
                      dangerouslySetInnerHTML={{ __html: milestone.text }}
                    />
                  </li>
                )
              })}
            </ul>
          </section>

          <section id="articles" ref={this.articles}>
            <header>
              <h2>Articles</h2>
              <button
                className="button-icon"
                onClick={() => {
                  this.scroll(this.top)
                }}
              >
                <i className="fa fa-arrow-up" />
                <span className="sr-only">Back to top</span>
              </button>
            </header>
            <ul className="articlelist">
              {articles.map((article, index) => {
                return (
                  <ArticleList
                    key={index}
                    image={article.image}
                    title={article.title}
                    date={article.date}
                    link={article.link}
                  />
                )
              })}
            </ul>
          </section>

          <section id="events" ref={this.events}>
            <header>
              <h2>Events</h2>
              <button
                className="button-icon"
                onClick={() => {
                  this.scroll(this.top)
                }}
              >
                <i className="fa fa-arrow-up" />
                <span className="sr-only">Back to top</span>
              </button>
            </header>
            <ul className="articlelist">
              {events.map((event, index) => {
                return (
                  <ArticleList
                    key={index}
                    image={event.image}
                    title={event.title}
                    date={event.date}
                    link={event.link}
                  />
                )
              })}
            </ul>
          </section>
        </div>
      </Layout>
    )
  }
}

export default About
