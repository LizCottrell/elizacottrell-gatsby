import React from "react"
import { Link } from "gatsby"
import "../styles/main.scss"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = () => (
  <React.Fragment>
    <Layout>
      <SEO title="Home" />

      <div className="home container">
        <section>
          <h1>Hi, I'm Eliza</h1>
          <p>
            I’m a <strong>front end developer</strong>,{" "}
            <strong>designer</strong>, and <strong>former archaeologist</strong>{" "}
            from Philadelphia. I work as a full stack software developer at{" "}
            <a
              href="https://www.thinkcompany.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Think Company
            </a>{" "}
            in Philly. I also continue to work with the archaeology community on
            freelance projects creating interpretive signs and laying out
            scientific reports.
          </p>
          <Link className="home__button button" to="/About">
            Read more
            <span className="sr-only">about Eliza</span>
          </Link>
        </section>
      </div>
    </Layout>
  </React.Fragment>
)

export default IndexPage
