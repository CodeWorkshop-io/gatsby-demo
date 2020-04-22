import React, { useState, useEffect } from "react"
import axios from "axios"
import { Grid } from "@material-ui/core"
import Layout from "../components/layout"
import EpisodeCard from "../character/EpisodeCard"

const Episodes = () => {
  const [episodes, setEpisodes] = useState()

  useEffect(() => {
    async function getEpisodes() {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/episode/"
        )

        const result = response.data && response.data.results

        setEpisodes(result)
      } catch (e) {
        console.error(e)
      }
    }
    getEpisodes()
  }, [])

  return (
    <Layout>
      <br />

      <Grid container spacing={5}>
        {/* For spacing between each grid */}

        {episodes.map((c, i) => (
          <Grid key={i} item xs={4}>
            <EpisodeCard {...c} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}

export default Episodes
