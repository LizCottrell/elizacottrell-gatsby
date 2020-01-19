import React from "react"
import ProjectList from "../components/ProjectList";
import projects from "../data/projects.js";

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Work = () => (
  <Layout>
    <SEO title="Work" />
    <div className="work container">
      <section>
        <h1>Work</h1>
        <p>
          As a <strong>web developer</strong>, I contribute to large scale
          content and API driven applications for clients ranging from financial
          services to retail to non-profit. I started out as a UI developer
          creating custom emails, campaign-driven single page sites, HTML5
          animations, and managing CMS content and theming for a digital agency.
          Now, as a full-stack developer, I primarily work with React and Redux
          incorporating single page applications into .NET environments on large
          applications. This includes developing pattern libraries, performing
          test driven development, mitigating for accessibility in javascript
          frameworks, and cross-browser compatibility.
        </p>
        <p>
          As <strong>web designer</strong>, I create end-to-end experiences
          addressing challenges, goals and strategies, as well as brand refresh,
          app planning and design iterations. The{" "}
          <a href="https://openforge.io/juntoscope/" target="_blank" rel="noopener noreferrer">
            Juntoscope case study
          </a>{" "}
          showcases my userflow and wireframe creation for a team estimation app
          that integrates with project management software. And the Batala
          Philadelphia website, seen below, is an example of my design and
          implementation of a single page site for a non-profit.
        </p>
      </section>

      <section>
        <h2>Featured Projects</h2>
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
            );
          })}
        </ul>
      </section>
    </div>
  </Layout>
)

export default Work
