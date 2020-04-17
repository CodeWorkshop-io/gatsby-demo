import React, { useState } from "react"
import axios from "axios"

import { Button } from "@material-ui/core"

import Layout from "../components/layout"

const Locations = () => {
  const [locations, setLocations] = useState()

  const getLocations = async () => {
    const data = await axios.get("https://rickandmortyapi.com/api/location/")

    setLocations(data)
  }

  return (
    <Layout>
      <br />
      <Button variant="contained" onClick={getLocations} color="secondary">
        GET
      </Button>
      <pre>{JSON.stringify(locations, null, 2)}</pre>
    </Layout>
  )
}

export default Locations
