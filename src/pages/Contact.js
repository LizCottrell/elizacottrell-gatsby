import React from "react"
import pdf from "../assets/resume.pdf"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Work = () => (
  <Layout>
    <SEO title="Work" />
    <div className="contact container">
      <section>
        <h1>Contact</h1>

        <p>
          <strong>elizabeth.cottrell at gmail.com</strong>
          <br />
          Contact me for my most recent work samples. <br />
          Professional inquiries only, please.
        </p>
        <div className="resume">
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            View Resume
          </a>
        </div>
      </section>
    </div>
  </Layout>
)

export default Work
