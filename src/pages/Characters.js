import React, { useState, useEffect } from "react"
import axios from "axios"

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
      <>
        {characters.map(i => (
          <CharacterCard {...characters} />
        ))}
      </>
    </Layout>
  )
}

export default Characters
