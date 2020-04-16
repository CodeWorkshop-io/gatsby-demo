import React from "react"

import { Button } from "@material-ui/core"

import Layout from "../components/layout"

import SEO from "../components/seo"

const axios = require("axios")
function getTodos() {
  axios
    .get("https://rickandmortyapi.com/api/character/", {})
    .then(res => console.log(res.data))
    .catch(err => console.error(err))
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <br />
    <Button variant="contained" onClick={getTodos} color="primary">
      GET
    </Button>
  </Layout>
)

export default IndexPage
