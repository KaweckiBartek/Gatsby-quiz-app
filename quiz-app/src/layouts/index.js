import * as React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ScoreCtx } from '../context'

const Layout = ({ children }) => (
  <StaticQuery
    query={ graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={ data => (
      <ScoreCtx.Consumer>
        {context => (
            <div className="layout">
              { children }
            </div>
        ) }
      </ScoreCtx.Consumer>
    ) }
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout