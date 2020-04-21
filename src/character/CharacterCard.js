import React from "react"

import { Card, CardActions, Container, Typography } from "@material-ui/core"

const CharacterCard = ({ children }) => {
  return (
    <Card>
      <Container maxWidth="sm">
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "80vh" }}
        >
          List of Characters
          <Typography>{children}</Typography>
        </Typography>
      </Container>
      <CardActions></CardActions>
    </Card>
  )
}

export default CharacterCard
