import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppBar, Button, Toolbar, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {Home} from '@material-ui/icons'
import {connect} from "react-redux";
import {authMe} from './../actions/login';

const styles = {
  username: {
    flexGrow: 0,
    fontWeight:500
  },
  grow: {
    flexGrow: 1,
  },
  loginBtn: {
    textTransform: 'none',
  },
  header: {
    color: "secondary",
  },
  menuButton: {
    color: "inherit",
    textTransform: 'none',
    marginLeft: 10,
    marginRight: 10,
  },
};

class Header extends Component {
  static defaultProps = {};

  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.authMe();
  }

  render() {
    const {classes, login} = this.props;

    return login.loggedIn ? (
      <AppBar position="static" color="inherit">
        <Toolbar>
          {/*<Menu/>*/}
          <Button color="primary" to="/admin-panel" className={`${classes.menuButton} ${classes.header}`} exact component={NavLink}><Home/>&nbsp;Admin Panel</Button>
          <Button color="primary" to="/users" className={classes.menuButton} exact component={NavLink}>Users</Button>
          <Button color="primary" to="/tags" className={classes.menuButton} exact component={NavLink}>Tags</Button>
          <Button color="primary" to="/posts" className={classes.menuButton} exact component={NavLink}>Posts</Button>
          <Typography variant="h6" color="inherit" className={classes.grow}>{}</Typography>
          <Typography variant="body1" color="inherit"className={classes.username} >{login.loggedUser ? login.loggedUser.username : ''}</Typography>
          <Button variant="contained" color="secondary" to="/login" className={classes.loginBtn} exact component={NavLink}>Logout</Button>
        </Toolbar>
      </AppBar>
    ) : (<div/>);
  }
}

const mapStateToProps = ({login}) => ({login});

const mapDispatchToProps = {authMe};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));