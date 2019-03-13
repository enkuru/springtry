import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Button, Paper, Table, TableBody, TableCell, TableHead, TableRow, Toolbar, Typography} from '@material-ui/core';
import CategoryDialog from "./CategoryDialog";
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

class CategoryTable extends Component {
  static propTypes = {classes: PropTypes.object.isRequired};

  render() {
    const {classes, categoryList, loadCategory, deleteCategory} = this.props;

    const emptyInfo = (
      <TableRow key={-1}>
        <TableCell colSpan={3} align="center">No Record Found!</TableCell>
      </TableRow>
    );

    return (
      <Paper className={classes.root}>
        <Toolbar>
          <Typography variant="h6" color="inherit">Category Management</Typography>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <CategoryDialog categoryList={categoryList}/>
          </Typography>
          <Button variant="contained" onClick={() => loadCategory()} color="primary"
                  className={`${classes.btn} ${classes.addNewBtn}`}>
            Add New
          </Button>
        </Toolbar>

        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell component="th" align="center">Name</TableCell>
              <TableCell component="th" align="center">Parent Category</TableCell>
              <TableCell component="th" align="center">Operations</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categoryList ? categoryList.map(category => (
              <TableRow key={category.id}>
                <TableCell align="center" scope="row">{category.name}</TableCell>
                <TableCell align="center" scope="row">{category.parentCategoryName || "-"}</TableCell>
                <TableCell align="center" scope="row">
                  <Button variant="outlined" className={`${classes.btn} ${classes.editBtn}`} onClick={() => loadCategory(category)}>Edit</Button>
                  <Button variant="outlined" className={`${classes.btn} ${classes.deleteBtn}`} onClick={() => deleteCategory(category.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            )) : emptyInfo}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(CategoryTable);