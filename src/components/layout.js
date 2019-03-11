import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import ThemeContext from "../context/themeContext"
import Nav from "./nav"
import Transition from "./transition"
import "./layout.css"

const Layout = ({ location, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <ThemeContext.Consumer>
        {theme => (
          <div className={theme.dark ? "dark" : "light"}>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: "description",
                  content: data.site.siteMetadata.description,
                },
                { name: "keywords", content: "sample, something" },
              ]}
            >
              <html lang="en" />
            </Helmet>

            <Nav location={location} />
            <Transition location={location}>{children}</Transition>
          </div>
        )}
      </ThemeContext.Consumer>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
