import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import PageLayoutBlank from "../components/pageLayoutBlank"
import AboutContent from "../components/aboutContent"
import SEO from "../components/seo"
import Footer from "../components/footer"
import "./about.css"


const AboutPage = () => (
  <PageLayoutBlank>
    <SEO title="About" />    
    <div class="about" id="about">
      <AboutContent>
      </AboutContent>
    </div>
  </PageLayoutBlank>
)

export default AboutPage
