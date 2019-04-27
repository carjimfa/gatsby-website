import React from "react"
import { Link } from "gatsby"

import PageLayoutBlank from "../components/pageLayoutBlank"
import Image from "../components/image"
import SEO from "../components/seo"
import Intro from "../components/intro"

const ContactPage = () => (
  <PageLayoutBlank>
    <div style={{ maxWidth: `40vw`, margin: `30vh 30vw 20vh 30vw`, textAlign:"center" }}>
      {/* <Image /> */}
      <h1 style={{
        fontFamily:"'Rubik', sans-serif",
        textTransform:"uppercase",
        fontSize:"1.3vw",
        fontWeight:"600",
        letterSpacing:"0.15vw",
        color:"white"}}>Do you want to contact me?</h1>
      <a href="https://landbot.io/u/H-87975-MOJCK2E09BY3GB9B/index.html" target="blank" style={{
        backgroundColor:"#000785", 
        fontFamily:"'Roboto Mono', monospace", 
        padding:"1.2vh 2vw 1.2vh 2vw", 
        borderRadius:"40px",
        textDecoration:"none",
        border:"1px solid #00ECA2",
        fontSize:"1vw",
        letterSpacing:"0.15vw",        
        color:"#00eca2"
        }}>I want to talk with a machine</a>
        <br/>
        <br/>
        <a href="mailto:carjimfa@gmail.com" target="blank" style={{
        backgroundColor:"#000785", 
        fontFamily:"'Roboto Mono', monospace", 
        padding:"1.2vh 2vw 1.2vh 2vw", 
        borderRadius:"40px",
        textDecoration:"none",
        border:"1px solid #00ECA2",
        fontSize:"1vw",
        letterSpacing:"0.15vw",        
        color:"#00eca2"
        }}>I want to send an email</a>
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </PageLayoutBlank>
)

export default ContactPage
