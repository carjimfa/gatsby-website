import React from "react"
import { Link } from "gatsby";
import ImageGithub from "./imageGithub";
import ImageInstagram from "./imageInstagram";
import ImageLinkedin from "./imageLinkedin";
import ImageTwitter from "./imageTwitter";

import "./footer.css";

export default () => (
  <footer style={{top:"calc(100vh - 6vh)", height:"6vh", position:"fixed"}}>
    <div className="footer-group footer-small-group">
      <span className="footer-element" style={{fontWeight:"bolder"}}>Des</span>
      <span className="footer-element" style={{fontWeight:"bolder"}}>ign</span>
      <span className="footer-element">by</span>
    </div>
  <div className="footer-group footer-big-group green-color" >
    <span className="footer-element"></span>
    <span className="footer-element" style={{fontWeight:"bolder"}}>Kalte</span>
    <span className="footer-element">dunkelheit</span>
  </div>
  <div className="footer-group footer-small-group">
    <span className="footer-element" style={{fontWeight:"bolder"}}>co</span>
    <span className="footer-element" style={{fontWeight:"bolder"}}>ded</span>
    <span className="footer-element">by</span>
  </div>
  <div className="footer-group footer-medium-group green-color" >
    <span className="footer-element"></span>              
    <span className="footer-element" style={{fontWeight:"bolder"}}>carlos</span>
    <span className="footer-element">jiménez</span>
  </div>
  <div className="footer-group footer-medium-group" style={{color:"white"}}>
    <span className="footer-element">Built</span>              
    <span className="footer-element">with</span>
    <span className="footer-element" style={{fontWeight:"bolder"}}><a style={{color:"white", textDecoration:"none"}} href="https://www.gatsbyjs.org">Gatsby</a></span>
  </div>
  <div className="footer-image-group">
    <a href="https://github.com/carjimfa"><span className="image-container"><ImageGithub className="image"/></span></a>              
    <a href="https://www.instagram.com/_drapergiggs/"><span className="image-container image-container-left"><ImageInstagram className="image"/></span></a>
    <a href="https://www.linkedin.com/in/cjimenezf/"><span className="image-container image-container-left"><ImageLinkedin className="image"/></span></a>
    <a href="https://twitter.com/carjimfa"><span className="image-container image-container-left"><ImageTwitter className="image"/></span></a>
  </div>
</footer>
  
);