import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppBar, Button, Chip, Toolbar, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {Home} from '@material-ui/icons'
import {connect} from "react-redux";
import {authMe, logout} from './../actions/login';
import {fetchMainCategories} from "./../actions/category";
import {Redirect} from "react-router";
import {lightBlue} from "@material-ui/core/colors";

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  logoutBtn: {
    textTransform: 'none',
  },
  loginBtn: {
    textTransform: 'none',
    color: '#fff',
    backgroundColor: lightBlue[500],
    '&:hover': {
      backgroundColor: lightBlue[700],
    },
  },
  header: {
    color: "secondary",
  },
  chip: {
    flexGrow: 0,
    fontWeight: 500,
    marginRight: "10px",
    margin: theme.spacing.unit,
  },
  menuButton: {
    color: "inherit",
    textTransform: 'none',
    marginLeft: 10,
    marginRight: 10,
  },
});

class Header extends Component {
  static defaultProps = {};

  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.fetchMainCategories();
  }

  render() {
    const {classes, login, home, logout} = this.props;
    const isAdmin = !!login.loggedUser && login.loggedUser.role.id === 1;

    const adminItems = [
      <Button color="primary" key={0} to="/admin-panel" className={`${classes.menuButton} ${classes.header}`} exact component={NavLink}><Home/>&nbsp;Admin Panel</Button>,
      <Button color="primary" key={1} to="/users" className={classes.menuButton} exact component={NavLink}>Users</Button>,
      <Button color="primary" key={2} to="/tags" className={classes.menuButton} exact component={NavLink}>Tags</Button>,
      <Button color="primary" key={3} to="/categories" className={classes.menuButton} exact component={NavLink}>Categories</Button>,
      <Button color="primary" key={4} to="/posts" className={classes.menuButton} exact component={NavLink}>Posts</Button>
    ];

    const generalItems = [
      <Button color="primary" key={0} to="/" className={`${classes.menuButton} ${classes.header}`} exact component={NavLink}><Home/>&nbsp;Home</Button>,
    ];

    home.categoryList.forEach(category => {
      generalItems.push((
        <Button color="primary" key={category.id} to={"/posts?categoryId=" + category.id} className={classes.menuButton} exact component={NavLink}>{category.name}</Button>
      ))
    });

    return isAdmin && !login.loggedIn ? <Redirect to="/login"/> : (
      <AppBar position="static" color="inherit">
        <Toolbar>
          {isAdmin ? adminItems : generalItems}
          <Typography variant="h6" color="inherit" className={classes.grow}>{}</Typography>
          {login.loggedIn ?
            <div>
              <Chip label={login.loggedUser ? login.loggedUser.username : ''} className={classes.chip}/>
              <Button variant="contained" color="secondary" onClick={() => logout()} className={classes.logoutBtn}>Logout</Button>
            </div>
            : <Button variant="contained" color="primary" to="/login" className={classes.loginBtn} exact component={NavLink}>Sign in</Button>
          }
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = ({login, home}) => ({login, home});

const mapDispatchToProps = {authMe, logout, fetchMainCategories};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));