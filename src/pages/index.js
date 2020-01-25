import React from "react"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import "../styles/main.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <React.Fragment>
    <Layout>
      <SEO title="Home" />

      <div className="home container">
        <section>
          <h1>Hi, I'm Elizabeth</h1>
          <p>
            I’m a <strong>front end developer</strong>,{" "}
            <strong>designer</strong>, and <strong>former archaeologist</strong>{" "}
            living in Philadelphia. I work at{" "}
            <OutboundLink
              href="https://www.thinkcompany.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Think Company
            </OutboundLink>{" "}
            as a full stack software developer. I also work with archaeologists,
            historians, scientists, and non-profit organizations in a design and
            digital capacity.
          </p>
          <Link className="home__button button" to="/about">
            Read more
            <span className="sr-only">about Eliza</span>
          </Link>
        </section>
      </div>
    </Layout>
  </React.Fragment>
)

export default IndexPage
