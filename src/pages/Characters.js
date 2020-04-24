import React, { useState, useEffect } from "react"
import axios from "axios"
import { TableContainer, Table } from "@material-ui/core"

import Layout from "../components/layout"
import CharacterCard from "../character/CharacterCard"

const Characters = props => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getCharacters() {
      try {
        setLoading(true)
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character/"
        )

        const result = response.data && response.data.results

        setCharacters(result)
        setLoading(false)
      } catch (e) {
        console.error(e)
      }
    }
    getCharacters()
  }, [])
  console.log(characters)

  return (
    <Layout>
      <br />
    </Layout>
  )
}

export default Characters
