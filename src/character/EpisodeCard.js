import React from "react"

import {
  makeStyles,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Avatar,
} from "@material-ui/core"

import { red } from "@material-ui/core/colors"

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "106.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}))

const EpisodeCar = props => {
  const classes = useStyles()

  console.log(props)
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.name.substr(0, 1)}
          </Avatar>
        }
        title={props.name}
        subheader={props.created}
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          ID: {props.id} <br />
          NAME: {props.name} <br />
          AIR DATE: {props.air_date} <br />
          EPISODE: {props.episode}
          <br />
          CREATED: {props.created}
        </Typography>
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>
  )
}

export default EpisodeCar
