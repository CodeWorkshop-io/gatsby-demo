import React, { useState } from "react"
import axios from "axios"

import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core"

const CharacterCard = () => {
  const [characters, setCharacters] = useState()

  const getCharacterCard = async () => {
    const data = await axios.get("https://rickandmortyapi.com/api/character/")

    setCharacters(data)
  }

  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          List of Characters
        </Typography>
      </CardContent>
      <pre>{JSON.stringify(characters, null, 2)}</pre>
      <CardActions>
        <Button size="medium" onClick={getCharacterCard}>
          GET
        </Button>
      </CardActions>
    </Card>
  )
}

export default CharacterCard
