import React from "react"
import { withStyles, makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow)

const darkText = {
  color: "white",
}

const darkSecondaryText = {
  color: "rgba(255, 255, 255, 0.5)",
}

function createData(
  Airline,
  Flight,
  Departing,
  Destination,
  FlightDate,
  AffectedRows
) {
  return { Airline, Flight, Departing, Destination, FlightDate, AffectedRows }
}

const rows = [
  createData(
    "Saudi Arabian Airlines",
    "SV115",
    "Riyadh, Saudi Arabia",
    "London",
    "April 22, 2020",
    "Unknown"
  ),
  createData(
    "Air Canada",
    "AC857",
    "London",
    "Toronto",
    "April 23, 2020",
    "18-24"
  ),
  createData(
    "Air Canada",
    "AC173",
    "Toronto",
    "Edmonton",
    "April 23, 2020",
    "15-21"
  ),
  createData(
    "Air Canada",
    "AC992",
    "Mexico",
    "Toronto",
    "April 24, 2020",
    "Unknown"
  ),
  createData(
    "Air Canada",
    "AC624",
    "Toronto",
    "Halifax",
    "April 24, 2020",
    "16-22"
  ),
  createData(
    "Westjet",
    "WS652",
    "Calgary",
    "Toronto",
    "April 27, 2020",
    "Unknown"
  ),
  createData(
    "Westjet",
    "WS3456",
    "Toronto",
    "Moncton",
    "April 27, 2020",
    "Unknown"
  ),
]

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
})

export default function CustomizedTables(props) {
  const classes = useStyles()

  return (
    <div className="exposure-table-container">
      <div className="aid-module-header">
        <h3 style={props.theme === true ? darkText : null}>
          Exposure to COVID-19
        </h3>
        <p style={props.theme === true ? darkSecondaryText : null}>
          Being aware of the risk can help you take the necessary steps to
          protect your health and the health of others around you.
        </p>
        <p style={props.theme === true ? darkSecondaryText : null}>
          If you have recently returned to Canada, you must quarantine
          (self-isolate) for 14 days. This is mandatory, whether or not you have
          symptoms.
        </p>
      </div>
      <div className="exposure-table">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Airline</StyledTableCell>
                <StyledTableCell align="right">Flight</StyledTableCell>
                <StyledTableCell align="right">Departing</StyledTableCell>
                <StyledTableCell align="right">Destination</StyledTableCell>
                <StyledTableCell align="right">Flight Date</StyledTableCell>
                <StyledTableCell align="right">Affected Rows</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.Flight}>
                  <StyledTableCell component="th" scope="row">
                    {row.Airline}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.Flight}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.Departing}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.Destination}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.FlightDate}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.AffectedRows}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <p
        style={props.theme === true ? darkText : null}
        className="aid-resource-ref"
      >
        Source: Government of Canada
      </p>
    </div>
  )
}
