/**
 * LayoutPage component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Menu from "../components/menu"
import "./layoutPage.css"

const LayoutPage = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQueryPage {
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
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
          className="site-page"
        >
          <main className="site-content-page">{children}</main>
          <footer>
            © Carlos Jiménez {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
)

LayoutPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutPage
