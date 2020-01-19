import React, { Component } from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ArticleList from "../components/ArticleList"
// import Pills from "../../components/Pills";
import timeline from "../data/timeline.js"
import articles from "../data/articles.js"
import events from "../data/events.js"

class About extends Component {
  constructor() {
    super()
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
        <div className="about container">
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
                self-taught web developer &amp; designer
              </button>{" "}
              from Philadelphia currently working as a full stack software
              developer. These days, I collaborate daily with cross-functional
              teams of technical leads, developers, UX designers, visual
              designers, and researchers. I work with HTML, CSS, and JavaScript
              creating single page applications in an agile environment.
            </p>
            <p>
              My transition into web development began with community
              organizations and local tech meetups like Girl Develop It in
              addition to teaching myself how to code on nights and weekends. I
              quickly recognized there is more value in a classroom, lecture,
              panel or event as opposed to sitting alone in front of a computer
              trying to hack it on my own. Because of the enormous amount of
              support I received when I started out, I began giving back as soon
              as I could. Now{" "}
              <button
                className="button-link"
                onClick={() => {
                  this.scroll(this.events)
                }}
              >
                I teach, speak, volunteer, TA, and organize events in the tech
                community
              </button>
              .
            </p>
            <p>
              This site is intended to show my work and transition from
              archaeologist to technologist. Throughout this transition, I've
              discovered my passion-projects are web accessibility and
              motivating people of <em>all</em> backgrounds looking to break
              into tech.
            </p>
          </section>

          <section id="timeline" ref={this.timeline}>
            <h2>Timeline</h2>
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
            <h2>Articles</h2>
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
            <h2>Events</h2>
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
