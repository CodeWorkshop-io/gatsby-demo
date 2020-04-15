import React from "react"
import PropTypes from "prop-types"

import { Link, AppBar, Toolbar, Typography } from "@material-ui/core"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h3">Gatsby Default Starter</Typography>
        </Toolbar>
      </AppBar>

      <Link href="/" style={{ color: `white`, textDecoration: `none` }}>
        {siteTitle}
      </Link>
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
