import React from "react"
import {
  makeStyles,
  GridListTile,
  GridList,
  GridListTileBar,
  Typography,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    width: 500,
    height: 250,
  },
}))

const LocationCard = props => {
  const classes = useStyles()

  console.log(props)

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList}>
        <GridListTile cols={2} style={{ height: "10vh" }}>
          <GridListTileBar
            title={props.name}
            subtitle={
              <span>
                <pre></pre>
                ID:{props.id} - CREATED: {props.created}
              </span>
            }
          />
        </GridListTile>
        <br />
        <Typography variant="body2" color="textSecondary" component="p">
          TYPE: {props.type} <hr />
          DIMENSION: {props.dimension}
        </Typography>
      </GridList>
    </div>
  )
}

export default LocationCard
