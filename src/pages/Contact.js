import React, { Component } from "react"
import pdf from "../assets/resume.pdf"
import pdfImg from "../assets/images/resume.png"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import classNames from "classnames"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = { showResume: false }
  }

  toggleResume() {
    this.setState(prevState => {
      return { showResume: !prevState.showResume }
    })
  }

  render() {
    const { showResume } = this.state

    return (
      <Layout>
        <SEO title="Contact" />
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
              <button
                className="button"
                onClick={e => {
                  trackCustomEvent({
                    category: "Button",
                    action: "Click",
                    label: "Viewed Resume",
                  })
                  this.toggleResume()
                }}
              >
                {showResume ? "Hide" : "View"} Resume
              </button>
              <div
                className={classNames({
                  "toggleContent-fadeIn": showResume,
                  "toggleContent-fadeOut": !showResume,
                })}
              >
                <p>Click resume to download</p>
                <a href={pdf} title="Download resume" download>
                  <img
                    src={pdfImg}
                    alt="Eliza Cottrell's resume - click to download"
                  />
                </a>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Contact
