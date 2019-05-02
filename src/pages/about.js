import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import PageLayoutBlank from "../components/pageLayoutBlank"
import AboutContent from "../components/aboutContent"
import SEO from "../components/seo"
import Footer from "../components/footer"
import BackgroundImage from 'gatsby-background-image'

const AboutPage = () => (
  <PageLayoutBlank>
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "PIA19952_orig.jpg" }) {
          childImageSharp {
            fluid(quality: 75, maxWidth: 2800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
     render={data => {
       // Set ImageData.
       const imageData = data.desktop.childImageSharp.fluid
       return (
          <BackgroundImage Tag="section"
                           fluid={imageData}
                           backgroundColor={`#000785`}
                           style={{backgroundSize:"20vw", backgroundPosition:"top left"}}
          >
    <SEO title="About" />    
    <div class="about">
      <AboutContent>
      </AboutContent>
    </div>
    </BackgroundImage>
       )
     }
     }
    />
  </PageLayoutBlank>
)

export default AboutPage
