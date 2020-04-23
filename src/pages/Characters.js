import React, { useState, useEffect } from "react"
import axios from "axios"

import { TableContainer, Table } from "@material-ui/core"

import Layout from "../components/layout"
import CharacterCard from "../character/CharacterCard"

const Characters = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    async function getCharacters() {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character/"
        )

        const result = response.data && response.data.results

        setCharacters(result)
      } catch (e) {
        console.error(e)
      }
    }
    getCharacters()
  }, [])

  return (
    <Layout>
      <br />
      <Table container spacing={2}>
        {characters.map((c, i) => (
          <TableContainer key={i} item xs={6}>
            <CharacterCard {...c} />
          </TableContainer>
        ))}
      </Table>
    </Layout>
  )
}

export default Characters
