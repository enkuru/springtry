import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppBar, Button, Toolbar, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {grey} from '@material-ui/core/colors';
import {Home} from '@material-ui/icons'
import {connect} from "react-redux";
import {authMe} from './../actions/login';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  loginBtn: {
    textTransform: 'none',
    color: 'grey.700',
    borderColor: 'grey.700',
    '&:hover': {
      color: '#fff',
      backgroundColor: grey[500],
    },
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
          <Button color="primary" to="/admin-panel" className={`${classes.menuButton} ${classes.header}`} exact
                  component={NavLink}><Home/>&nbsp;Admin Panel</Button>
          <Button color="primary" to="/users" className={classes.menuButton} exact component={NavLink}>Users</Button>
          <Button color="primary" to="/roles" className={classes.menuButton} exact component={NavLink}>Roles</Button>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {/*<Link to="/" underline="none" color="inherit" exact component={NavLink}>My Blog</Link>*/}
          </Typography>
          <Button variant="outlined" to="/login" className={classes.loginBtn} exact component={NavLink}>Login</Button>
        </Toolbar>
      </AppBar>
    ) : (<div/>);
  }
}

const mapStateToProps = ({login}) => {
  return {login};
};

const mapDispatchToProps = {authMe};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));