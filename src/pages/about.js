import React from "react"
import { Link, StaticQuery } from "gatsby"

import PageLayout from "../components/pageLayout"
import AboutContent from "../components/aboutContent"
import SEO from "../components/seo"
import Footer from "../components/footer"


const AboutPage = () => (
  <PageLayout>
    <SEO title="About" />    
    <div class="about">
      <AboutContent>
      </AboutContent>
    </div>
  </PageLayout>
)

export default AboutPage
