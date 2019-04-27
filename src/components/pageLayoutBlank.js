/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Menu from "../components/menu"
import "./pageLayoutBlank.css"
import ImageGithub from "./imageGithub";
import ImageInstagram from "./imageInstagram";
import ImageLinkedin from "./imageLinkedin";
import ImageTwitter from "./imageTwitter";

const PageLayoutBlank = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitlePageBlankQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <Menu />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: '90%',
            marginLeft:"5%",
            // padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
          className="page-site-blank"
        >
          <main className="page-site-content-blank">{children}</main>
          <footer style={{marginTop:"5vh"}}>
            <div style={{width:"5vw", float:"left", height:"10vh", fontFamily:"'Rubik', sans-serif", textTransform:"uppercase", fontSize:"1vw", letterSpacing:"0.5vw"}}>
              <span style={{width:"5vw", float:"left", height:"3.33vh", fontWeight:"bolder"}}>Des</span>
              <span style={{width:"5vw", float:"left", height:"3.33vh", fontWeight:"bolder"}}>ign</span>
              <span style={{width:"5vw", float:"left", height:"3.33vh"}}>by</span>
            </div>
            <div style={{width:"15vw", float:"left", height:"10vh", fontFamily:"'Rubik', sans-serif", textTransform:"uppercase", fontSize:"1vw", letterSpacing:"0.5vw", color:"#00ECA2"}}>
              <span style={{width:"15vw", float:"left", height:"3.33vh"}}></span>
              <span style={{width:"15vw", float:"left", height:"3.33vh", fontWeight:"bolder"}}>Kalte</span>
              <span style={{width:"15vw", float:"left", height:"3.33vh"}}>dunkelheit</span>
            </div>
            <div style={{width:"5vw", float:"left", height:"10vh", fontFamily:"'Rubik', sans-serif", textTransform:"uppercase", fontSize:"1vw", letterSpacing:"0.5vw"}}>
              <span style={{width:"5vw", float:"left", height:"3.33vh", fontWeight:"bolder"}}>co</span>
              <span style={{width:"5vw", float:"left", height:"3.33vh", fontWeight:"bolder"}}>ded</span>
              <span style={{width:"5vw", float:"left", height:"3.33vh"}}>by</span>
            </div>
            <div style={{width:"10vw", float:"left", height:"10vh", fontFamily:"'Rubik', sans-serif", textTransform:"uppercase", fontSize:"1vw", letterSpacing:"0.5vw", color:"#00ECA2"}}>
              <span style={{width:"10vw", float:"left", height:"3.33vh"}}></span>              
              <span style={{width:"10vw", float:"left", height:"3.33vh"}}>carlos</span>
              <span style={{width:"10vw", float:"left", height:"3.33vh", fontWeight:"bolder"}}>jiménez</span>
            </div>
            <div style={{width:"10vw", float:"left", height:"10vh", fontFamily:"'Rubik', sans-serif", textTransform:"uppercase", fontSize:"1vw", letterSpacing:"0.5vw", color:"white"}}>
              <span style={{width:"10vw", float:"left", height:"3.33vh"}}>Built</span>              
              <span style={{width:"10vw", float:"left", height:"3.33vh"}}>with</span>
              <span style={{width:"10vw", float:"left", height:"3.33vh", fontWeight:"bolder"}}><a style={{color:"white", textDecoration:"none"}} href="https://www.gatsbyjs.org">Gatsby</a></span>
            </div>
            <div style={{marginLeft:"31vw",width:"9vw", float:"left", height:"10vh", fontFamily:"'Rubik', sans-serif", textTransform:"uppercase", fontSize:"1vw", letterSpacing:"0.5vw", color:"white"}}>
              <span style={{width:"1.5vw", float:"left", height:"10vh"}}><ImageGithub style={{height:"22px", width:"20px"}}/></span>              
              <span style={{marginLeft:"1vw",width:"1.5vw", float:"left", height:"10vh"}}><ImageInstagram style={{height:"22px", width:"20px"}}/></span>
              <span style={{marginLeft:"1vw",width:"1.5vw", float:"left", height:"10vh"}}><ImageLinkedin style={{height:"22px", width:"20px"}}/></span>
              <span style={{marginLeft:"1vw",width:"1.5vw", float:"left", height:"10vh"}}><ImageTwitter style={{height:"22px", width:"20px"}}/></span>
            </div>
          </footer>
        </div>
      </>
    )}
  />
)

PageLayoutBlank.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayoutBlank
