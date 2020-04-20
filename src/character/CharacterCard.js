import React, { useState } from "react"
import Characters from "../pages/Characters"

import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core"

const CharacterCard = ({ onSubmit, children }) => {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          List of Characters
        </Typography>
        <Typography>{children}</Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" onClick={onSubmit}>
          GET
        </Button>
      </CardActions>
    </Card>
  )
}

export default CharacterCard
