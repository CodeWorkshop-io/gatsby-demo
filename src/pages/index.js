import React from "react"

import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Typography variant="h3" gutterBottom>
      Hi people
    </Typography>

    <Typography variant="h7" gutterBottom>
      Welcome to your new Gatsby site.
    </Typography>
    <br></br>

    <Typography variant="h7" gutterBottom>
      Now go build something great.
    </Typography>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link href="page-2">Go to page 2</Link>
  </Layout>
)

export default IndexPage
