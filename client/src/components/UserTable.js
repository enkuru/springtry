import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {
  IconButton,
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
});

class UserTable extends Component {
  static propTypes = {classes: PropTypes.object.isRequired};
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    const {classes, users} = this.props;

    const emptyInfo = (
      <TableRow key={-1}>
        <TableCell colSpan={5} align="center">No Record Found!</TableCell>
      </TableRow>
    );

    return (
      <Paper className={classes.root}>
        <Toolbar>
          <Typography variant="h6" color="inherit" >User Management</Typography>
          <Typography variant="h6" color="inherit" className={classes.grow}>{}</Typography>
          <IconButton color="inherit"><UserDialog/></IconButton>
        </Toolbar>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="center">Username</TableCell>
              <TableCell align="center">Full Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Role</TableCell>
              <TableCell align="center">&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users ? users.map(user => (
              <TableRow key={user.id}>
                <TableCell component="th" scope="row">{user.username}</TableCell>
                <TableCell component="th" scope="row">{user.name} + {user.surname}</TableCell>
                <TableCell component="th" scope="row">{user.email}</TableCell>
                <TableCell component="th" scope="row">{user.role.code}</TableCell>
                <TableCell component="th" scope="row">
                  edit/delete
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