import React from "react"

import {
  makeStyles,
  Table,
  TableContainer,
  Paper,
  TablePagination,
  TableRow,
  TableBody,
  TableCell,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 900,
  },
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}))

const CharacterCard = props => {
  const classes = useStyles()

  console.log(props)
  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableBody>
            <TableRow key={props.name} image={props.image}>
              <TableCell component="th" scope="row">
                {props.name}
              </TableCell>
              <TableCell align="right">
                Gender: {props.gender}
                <br />
                Species: {props.species}
                <br />
                Status: {props.status}
                <br />
                Origin: {props.origin.name}
                <br />
                Location: {props.location.name}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination component="div" />
    </div>
  )
}

export default CharacterCard
