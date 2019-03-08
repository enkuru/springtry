import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Toolbar,
  Typography
} from '@material-ui/core';
import HashTagDialog from "./HashTagDialog";
import {green, lightBlue, red} from '@material-ui/core/colors';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  grow: {
    flexGrow: 1,
  },
  table: {
    minWidth: 700,
  },
  btn: {
    textTransform: 'none'
  },
  addNewBtn: {
    color: '#fff',
    backgroundColor: lightBlue[500],
    '&:hover': {
      backgroundColor: lightBlue[700],
    },
  },
  deleteBtn: {
    color: '#fff',
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
  editBtn: {
    color: '#fff',
    marginRight:'10px',
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
});

class HashTagTable extends Component {
  static propTypes = {classes: PropTypes.object.isRequired};

  render() {
    const {classes, hashTagList, loadHashTag, deleteHashTag} = this.props;

    const emptyInfo = (
      <TableRow key={-1}>
        <TableCell colSpan={3} align="center">No Record Found!</TableCell>
      </TableRow>
    );

    return (
      <Paper className={classes.root}>
        <Toolbar>
          <Typography variant="h6" color="inherit">HashTag Management</Typography>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <HashTagDialog/>
          </Typography>
          <Button variant="contained" onClick={() => loadHashTag()} color="primary"
                  className={`${classes.btn} ${classes.addNewBtn}`}>
            Add New
          </Button>
        </Toolbar>

        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell component="th" align="center">Name</TableCell>
              <TableCell component="th" align="center">Operations</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hashTagList ? hashTagList.map(hashTag => (
              <TableRow key={hashTag.id}>
                <TableCell align="center" scope="row">{hashTag.name}</TableCell>
                <TableCell align="center" scope="row">
                  <Button variant="outlined" className={`${classes.btn} ${classes.editBtn}`} onClick={() => loadHashTag(hashTag)}>Edit</Button>
                  <Button variant="outlined" className={`${classes.btn} ${classes.deleteBtn}`} onClick={() => deleteHashTag(hashTag.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            )) : emptyInfo}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(HashTagTable);