import React from "react"
import { Link } from "gatsby"

import PageLayoutBlank from "../components/pageLayoutBlank"
import Image from "../components/image"
import SEO from "../components/seo"
import Intro from "../components/intro"
import "./contact.css";

const ContactPage = () => (
  <PageLayoutBlank>
    <SEO title="Contact" />    
    <div className="contact-buttons-group">
      {/* <Image /> */}
      <h1 style={{
        fontFamily:"'Rubik', sans-serif",
        textTransform:"uppercase",
        fontSize:"1.3vw",
        fontWeight:"600",
        letterSpacing:"0.15vw",
        color:"white"}}>Do you want to contact me?</h1>
      <a href="https://landbot.io/u/H-87975-MOJCK2E09BY3GB9B/index.html" target="blank" className="contact-button">I want to talk with a machine</a>
        <br/>
        <br/>
        <a href="mailto:carjimfa@gmail.com" target="blank" class="contact-button">I want to send an email</a>
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </PageLayoutBlank>
)

export default ContactPage
