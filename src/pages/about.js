import React from "react"
import { Link, StaticQuery } from "gatsby"

import PageLayout from "../components/pageLayout"
import AboutContent from "../components/AboutContent"

const AboutPage = () => (
  <PageLayout>
    <div class="about" style={{width:'100%'}}>
      <AboutContent>
      </AboutContent>
    </div> 
  </PageLayout>
)

export default AboutPage
