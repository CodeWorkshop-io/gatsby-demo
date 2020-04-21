import React from "react"

import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <br />
    <Typography variant="h3" gutterBottom>
      Hi from the second page
    </Typography>

    <Typography variant="h6" gutterBottom>
      Welcome to page 2
    </Typography>
    <pre />

    <Link href="/">Go back to the homepage</Link>

    <br />
  </Layout>
)

export default SecondPage
