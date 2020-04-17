import React, { useState } from "react"
import axios from "axios"

import { Button, LinearProgress, Typography } from "@material-ui/core"

import Layout from "../components/layout"

const Characters = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [characters, setCharacters] = useState()

  const getCharacters = async () => {
    setLoading(true)
    try {
      const data = await axios.get("https://rickandmortyapi.com/api/character/")

      setCharacters(data)
    } catch (ex) {
      console.error(ex)
      setError(ex.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout>
      {loading && <LinearProgress />}

      {error && <Typography color="error">{error}</Typography>}

      <br />
      <Button variant="contained" onClick={getCharacters} color="primary">
        GET
      </Button>
      <pre>{JSON.stringify(characters, null, 2)}</pre>
    </Layout>
  )
}

export default Characters
