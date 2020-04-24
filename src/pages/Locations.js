import React, { useState, useEffect } from "react"
import axios from "axios"
import { Button } from "@material-ui/core/Button"
import Layout from "../components/layout"

const Locations = props => {
  const [locations, setLocations] = useState()

  const [loading, setLoading] = useState(false)

  const [pages, setPages] = useState(1) // how many do you want per page

  useEffect(() => {
    async function getLocations() {
      try {
        setLoading(true)
        const response = await axios.get(
          "https://rickandmortyapi.com/api/location/"
        )

        const result = response.data && response.data.results

        setLocations(result)

        const nextItem = props => {
          pages = pages + 1 // increase pages by one
          pages = pages % locations.length // if we've gone too high, start from `0` again
          return locations[pages] // give us back the item of where we are now
        }

        const prevItem = props => {
          if (pages === 0) {
            // pages would become 0
            pages = locations.length // so put it at the other end of the array
          }
          pages = pages - 1 // decrease by one
          return locations[pages] // give us back the item of where we are now
        }

        setLoading(false)
      } catch (e) {
        console.error(e)
      }
    }
    getLocations()
  }, [])
  console.log(locations)

  return (
    <Layout>
      <br />
      <pre>{JSON.stringify(locations, null, 2)}</pre>
      <Button variant="contained" onClick={props}>
        Previous
      </Button>
      <Button variant="contained" onClick={props}>
        Next
      </Button>
    </Layout>
  )
}

export default Locations
