import React from "react"
import { Link } from "gatsby"

import PageLayoutBlank from "../components/pageLayoutBlank"
import SEO from "../components/seo"
import Services from "../components/services"

const ServicesPage = () => (
  <PageLayoutBlank>
    <SEO title="Services" />    
    <Services>
    </Services>
  </PageLayoutBlank>
)

export default ServicesPage
