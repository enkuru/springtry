import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Toolbar,
  Typography
} from '@material-ui/core';
import UserDialog from "./UserDialog";
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
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
});

class UserTable extends Component {
  static propTypes = {classes: PropTypes.object.isRequired};

  render() {
    const {classes, userList, roleList, loadUser, deleteUser} = this.props;

    const emptyInfo = (
      <TableRow key={-1}>
        <TableCell colSpan={5} align="center">No Record Found!</TableCell>
      </TableRow>
    );

    return (
      <Paper className={classes.root}>
        <Toolbar>
          <Typography variant="h6" color="inherit">User Management</Typography>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <UserDialog roleList={roleList}/>
          </Typography>
          <Button variant="contained" onClick={() => loadUser()} color="primary"
                  className={`${classes.btn} ${classes.addNewBtn}`}>
            Add New
          </Button>
        </Toolbar>

        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell component="th" align="center">Name</TableCell>
              <TableCell component="th" align="center">Surname</TableCell>
              <TableCell component="th" align="center">Username</TableCell>
              <TableCell component="th" align="center">Email</TableCell>
              <TableCell component="th" align="center">Role</TableCell>
              <TableCell component="th" align="center">Operations</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList ? userList.map(user => (
              <TableRow key={user.id}>
                <TableCell align="center" scope="row">{user.name}</TableCell>
                <TableCell align="center" scope="row">{user.surname}</TableCell>
                <TableCell align="center" scope="row">{user.username}</TableCell>
                <TableCell align="center" scope="row">{user.email}</TableCell>
                <TableCell align="center" scope="row">{user.role.code}</TableCell>
                <TableCell align="center" scope="row">
                  <Grid container spacing={0}>
                    <Grid item xs={6}>
                      <Button variant="outlined" className={`${classes.btn} ${classes.editBtn}`}
                              onClick={() => loadUser(user)}>Edit</Button>
                    </Grid>
                    <Grid item xs={6}>
                      {user.username !== 'admin' ?
                        (<Button variant="outlined" className={`${classes.btn} ${classes.deleteBtn}`}
                                 onClick={() => deleteUser(user.id)}>Delete</Button>
                        ) : undefined}
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            )) : emptyInfo}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(UserTable);