import React from "react"

import {
  makeStyles,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Avatar,
} from "@material-ui/core"

import { red } from "@material-ui/core/colors"

// how to style your components in Material
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
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

// This is half correct
// if you think about the props that are coming in here form the parent being the Characters.js File, you will see we spread the items from the array into this component one by one
// effectively this receives, one characte, not a list

// the children prop is only present if you pass something into the dom object eg <div>cake</div> will have a child of 'cake'

// what you should do if you dont know what gets passed in here is just use props for starters
// then log it to console

const CharacterCard = props => {
  // Use Styles hook from material, look above
  const classes = useStyles()

  console.log(props)

  // or we can return is as json   eg
  // return (
  //   <div>
  //     {JSON.stringify(props, null, 2)}
  //     {/* that will pretty print it */}
  //   </div>
  // )

  // as a starter
  // return <Card></Card>

  // copied from material ui https://material-ui.com/components/cards/#complex-interaction
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
      <CardMedia
        className={classes.media}
        image={props.image}
        title={props.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Gender: {props.gender} <br />
          Species: {props.species} <br />
          Status: {props.status} <br />
          {props.type ? (
            <>
              Type: {props.type} <br />
            </>
          ) : (
            undefined
          )}
          Origin: {props.origin.name}
          Location: {props.location.name}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
      </CardActions>
    </Card>
  )
}

export default CharacterCard
