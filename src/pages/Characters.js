import React, { useState } from "react"
import axios from "axios"

import { LinearProgress, Typography } from "@material-ui/core"

import Layout from "../components/layout"
import CharacterCard from "../character/CharacterCard"

const Characters = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [characters, setCharacters] = useState([])

  const getCharacters = async () => {
    setLoading(true)
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character/"
      )

      setCharacters(response)
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

      <CharacterCard onSubmit={getCharacters}>
        <pre>{JSON.stringify(characters, null, 2)}</pre>
      </CharacterCard>
    </Layout>
  )
}

export default Characters
