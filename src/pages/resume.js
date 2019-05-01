import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

import PageLayoutBlank from "../components/pageLayoutBlank"
import SEO from "../components/seo"
import TimelineSlider from "../components/timelineSlider";

const ResumePage = () => (
  <PageLayoutBlank renderFooter={true}>
    <SEO title="Resume" />
    <div class="timeline-title" style={{float:"left", width:"10%", backgroundColor:"#00ECA2", height:"90vh", textAlign:"center"}}>
        <h1 style={{color:"#000785",fontFamily:"'Roboto Mono', monospace", transform:"rotate(270deg)", marginTop:"35vh", width:"20vh", height:"20vh", textTransform:"uppercase", fontSize:"7.5vh"}}>Time <hr/> Line</h1>
    </div>
    <div class="timeline-title-mobile" style={{width:"100%", backgroundColor:"#00ECA2", height:"10vh"}}>
        <h1 style={{color:"#000785",fontFamily:"'Roboto Mono', monospace", textTransform:"uppercase", textAlign:"center"}}>Time Line</h1>
    </div>
    {/* <TimelineSlider/> */}
    <TimelineSlider>
    </TimelineSlider>
  </PageLayoutBlank>
)

export default ResumePage
