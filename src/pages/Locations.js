import React, { useState, useEffect } from "react"
import axios from "axios"
import Button from "@material-ui/core/Button"
import Layout from "../components/layout"

const Locations = () => {
  const [locations, setLocations] = useState()
  const [loading, setLoading] = useState(false)

  const [currentPage, setCurrentPage] = useState(1) //for beginning at the first page

  const [locationPerPage, setLocationPerPage] = useState(10) // how many do you want per page

  useEffect(() => {
    async function getLocations() {
      try {
        setLoading(true)
        const response = await axios.get(
          "https://rickandmortyapi.com/api/location/"
        )

        const result = response.data && response.data.results

        setLocations(result)

        setLoading(false)
      } catch (e) {
        console.error(e)
      }
    }
    getLocations()
  }, [])
  console.log(locations)

  //Get Current Locations
  const indexOfLastLocation = currentPage * locationPerPage
  const indexOfFirstLocation = indexOfLastLocation - locationPerPage
  const currentLocation = locations.slice(
    indexOfFirstLocation,
    indexOfLastLocation
  )
  const IndexOfNextLocation = indexOfFirstLocation - locationPerPage
  const NextLocation = locations.slice(
    indexOfFirstLocation,
    IndexOfNextLocation
  )

  return (
    <Layout>
      <br />

      <Button variant="contained" onClick={currentLocation}>
        Previous
        <pre>{JSON.stringify(currentLocation, null, 2)}</pre>
      </Button>

      <Button variant="contained" onClick={NextLocation}>
        Next
        <pre>{JSON.stringify(NextLocation, null, 2)}</pre>
      </Button>
    </Layout>
  )
}

export default Locations
