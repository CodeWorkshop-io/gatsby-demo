import React, { useState, useEffect } from "react"
import axios from "axios"

import { Grid } from "@material-ui/core"

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

  // There are 2 options here, a GridList or a Grid of Cards
  // https://material-ui.com/components/grid-list/
  // https://material-ui.com/components/cards/
  return (
    <Layout>
      <br />
      <Grid container spacing={2}>
        {characters.map((c, i) => (
          <Grid key={i} item xs={3}>
            {/* You want to spread the charater items from the map into the character card so that we can access the props from the api values */}
            <CharacterCard {...c} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}

export default Characters
