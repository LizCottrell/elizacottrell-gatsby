import React from "react"
import ProjectList from "../components/projectList"
import projects from "../data/projects.js"

import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Work = () => (
  <Layout>
    <SEO title="Work" />
    <div className="work container">
      <section>
        <h1>Work</h1>
        <p>
          As a <strong>web developer</strong>, I contribute to large-scale
          content &amp; API-driven applications for clients ranging from
          financial services to retail to non-profit. My start as a UI developer
          began with custom emails, single page sites, HTML5 animations, and
          managing CMS content &amp; theming at a digital agency. Currently, I
          work with React and Redux within .NET applications. My work includes
          pattern libraries development, test-driven development, accessibility,
          and cross-browser compatibility testing.
        </p>
        <p>
          As a <strong>web designer</strong>, I create end-to-end experiences
          addressing challenges, goals and strategies, as well as brand refresh,
          app planning and design iterations. The Batala Philadelphia website,
          seen below, is an example of my design and implementation of a single
          page site for a non-profit.
        </p>
      </section>

      <section>
        <h2>Featured Projects</h2>
        <p>
          <strong>Please note:</strong> all non-freelance work is proprietary -
          so if you are looking for recent work, please{" "}
          <Link to={`/contact`}>contact me</Link>.
        </p>
        <ul className="projectlist">
          {projects.map((project, index) => {
            return (
              <ProjectList
                key={index}
                image={project.image}
                title={project.title}
                github={project.github}
                url={project.url}
                design={project.design}
                development={project.development}
                text={project.text}
              />
            )
          })}
        </ul>
      </section>
    </div>
  </Layout>
)

export default Work
