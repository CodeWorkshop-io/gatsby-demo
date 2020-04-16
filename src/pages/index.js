import React from "react"

import { Link, Typography } from "@material-ui/core"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <br />
    <Typography variant="h3" gutterBottom>
      Hi people
    </Typography>

    <Typography variant="h6" gutterBottom>
      Welcome to your new Gatsby site.
    </Typography>
    <br />

    <Typography variant="h6" gutterBottom>
      Now go build something great.
    </Typography>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link href="page-2">Go to page 2</Link>
    <br />
    <Link href="Characters">Lists of Characters</Link>
  </Layout>
)

export default IndexPage
