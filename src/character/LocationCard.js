import React from "react"
import {
  makeStyles,
  Card,
  GridListTile,
  GridListTileBar,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
}))

const LocationCard = props => {
  const classes = useStyles()

  console.log(props)

  return (
    <Card className={classes.root}>
      <GridListTile style={{ height: "10vh" }}>
        <img src={props.image} />
        <GridListTileBar
          title={props.name}
          subtitle={
            <span>
              <pre></pre>
              ID:{props.id} -CREATED: {props.created}
            </span>
          }
        />
      </GridListTile>
      <CardContent>
        <br />
        <Typography variant="body2" color="textSecondary" component="p">
          TYPE: {props.type} <hr />
          DIMENSION: {props.dimension}
          <br />
        </Typography>
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>
  )
}

export default LocationCard
