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
import PostDialog from "./PostDialog";
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

class PostTable extends Component {
  static propTypes = {classes: PropTypes.object.isRequired};

  render() {
    const {classes, postList, loadPost, deletePost} = this.props;

    const emptyInfo = (
      <TableRow key={-1}>
        <TableCell colSpan={3} align="center">No Record Found!</TableCell>
      </TableRow>
    );

    return (
      <Paper className={classes.root}>
        <Toolbar>
          <Typography variant="h6" color="inherit">Post Management</Typography>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <PostDialog/>
          </Typography>
          <Button variant="contained" onClick={() => loadPost()} color="primary"
                  className={`${classes.btn} ${classes.addNewBtn}`}>
            Add New
          </Button>
        </Toolbar>

        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell component="th" align="center">Subject</TableCell>
              <TableCell component="th" align="center">Content</TableCell>
              <TableCell component="th" align="center">Operations</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {postList ? postList.map(post => (
              <TableRow key={post.id}>
                <TableCell align="center" scope="row">{post.subject}</TableCell>
                <TableCell align="center" scope="row">{post.content}</TableCell>
                <TableCell align="center" scope="row">
                  <Button variant="outlined" className={`${classes.btn} ${classes.editBtn}`} onClick={() => loadPost(post)}>Edit</Button>
                  <Button variant="outlined" className={`${classes.btn} ${classes.deleteBtn}`} onClick={() => deletePost(post.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            )) : emptyInfo}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(PostTable);