import React, { useState, useEffect } from "react"
import axios from "axios"
import { Grid } from "@material-ui/core"
import Layout from "../components/layout"
import LocationCard from "../character/LocationCard"

const Locations = () => {
  const [locations, setLocations] = useState()

  useEffect(() => {
    async function getLocations() {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/location/"
        )

        const result = response.data && response.data.results

        setLocations(result)
      } catch (e) {
        console.error(e)
      }
    }
    getLocations()
  }, [])

  return (
    <Layout>
      <br />

      <Grid container spacing={5}>
        {/* For spacing between each grid */}

        {locations.map((c, i) => (
          <Grid key={i} item xs={4}>
            <LocationCard {...c} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}

export default Locations
