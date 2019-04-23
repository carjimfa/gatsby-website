import React from "react"
import "./menu.css";
import { Link } from "gatsby";

export default () => (
  <div className="menu">
    <ul>
        <li><Link to="/contact/" activeClassName="is-active">Contact</Link></li>
        <li><Link to="/resume/" activeClassName="is-active">Resume</Link></li>
        <li><Link to="/about/" activeClassName="is-active">About</Link></li>
        <li><Link to="/" activeClassName="is-active">Home</Link></li>
    </ul>
  </div>
  
);