import React from "react"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"

// TODO: A note here, I like separating libraries and components we have built with a space and to group external libraries at the top of the code
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Typography variant="h3" gutterBottom>
      Hi from the second page
    </Typography>

    <Typography variant="h7" gutterBottom>
      Welcome to page 2
    </Typography>
    <pre></pre>

    <Link href="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
