import React from "react"

import { Button } from "@material-ui/core"

import Layout from "../components/layout"

const axios = require("axios")
function getTodos() {
  axios
    .get("https://rickandmortyapi.com/api/character/", {})
    .then(res => console.log(res.data))
    .catch(err => console.error(err))
}

const Characters = () => (
  <Layout>
    <br />
    <Button variant="contained" onClick={getTodos} color="primary">
      GET
    </Button>
  </Layout>
)

export default Characters
