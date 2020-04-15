// TODO: Change the ordering, react should be on top, then proptypes, then imports from other libraries

import Link from "@material-ui/core/Link"
import PropTypes from "prop-types"
import React from "react"

// TODO: I prefer importing like this from material, just simplifies and groups imports making code cleaner
// import { Link, Typography } from "@material-ui/core"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    {/* TODO: Update this to use Material Appbar and Toolbar */}
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link href="/" style={{ color: `white`, textDecoration: `none` }}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
