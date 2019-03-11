import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import '../styles/styles.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={data => {
      const title = data.site.siteMetadata.title
      const subtitle = data.site.siteMetadata.subtitle
      return (
        <>
          <Helmet>
            <title>{title} | {subtitle}</title>
          </Helmet>
          <Header title={title} subtitle={subtitle} />
          <main className='main'>{children}</main>
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
