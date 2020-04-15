import React from "react"

// TODO: use Gatsby links for internal links as they complement the router library so that the page does not reload
// TODO: have a look at the Link API from material: https://material-ui.com/api/link/ it includes a component prop that you can pass Gatsby's link to as a base component
// TODO: you can alias imports like this import { Link as GatsbyLink } from "gatsby"

import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"

// TODO: A note here, I like separating libraries and components we have built with a space and to group external libraries at the top of the code

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
