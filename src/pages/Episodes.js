import React, { useState } from "react"
import axios from "axios"

import { Button } from "@material-ui/core"

import Layout from "../components/layout"

const Episodes = () => {
  const [episodes, setEpisodes] = useState()

  const getEpisodes = async () => {
    const data = await axios.get("https://rickandmortyapi.com/api/episode/")

    setEpisodes(data)
  }

  return (
    <Layout>
      <br />
      <Button variant="contained" onClick={getEpisodes} color="secondary">
        GET
      </Button>
      <pre>{JSON.stringify(episodes, null, 2)}</pre>
    </Layout>
  )
}

export default Episodes
