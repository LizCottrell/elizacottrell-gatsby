import React from "react"
import pdf from "../assets/resume.pdf"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

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
            onClick={e => {
              trackCustomEvent({
                category: "Button",
                action: "Click",
                label: "Viewed Resume",
              })
            }}
          >
            View Resume
          </a>
        </div>
      </section>
    </div>
  </Layout>
)

export default Work
