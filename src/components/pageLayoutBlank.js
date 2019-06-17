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

import Footer from "./footer";

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
        </div>
      </>
    )}
  />
)

PageLayoutBlank.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayoutBlank
