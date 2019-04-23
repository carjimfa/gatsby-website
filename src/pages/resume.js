import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

import PageLayoutBlank from "../components/pageLayoutBlank"
import SEO from "../components/seo"
import TimelineSlider from "../components/timelineSlider";

const ResumePage = () => (
  <PageLayoutBlank>
    <SEO title="Resume" />
    <div style={{float:"left", width:"10%", backgroundColor:"#00ECA2", height:"90vh"}}>
        <h1 style={{color:"#000785",fontFamily:"'Roboto Mono', monospace", transform:"rotate(270deg)", marginTop:"30vh", width:"20vh", textTransform:"uppercase"}}>Time Line</h1>
    </div>
    <TimelineSlider/>
  </PageLayoutBlank>
)

export default ResumePage
