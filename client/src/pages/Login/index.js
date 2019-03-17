import React, {Component} from 'react';
import {Redirect} from 'react-router'
import PropTypes from 'prop-types';
import {
  Avatar,
  Button,
  Checkbox,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Grid,
  Input,
  InputLabel,
  Paper,
  Typography
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import withStyles from '@material-ui/core/styles/withStyles';
import {connect} from "react-redux";
import {loginSubmit} from "../../actions/login";
import {green, lightBlue} from '@material-ui/core/colors';
import {NavLink} from "react-router-dom";
import {ArrowBack} from "@material-ui/icons";

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  backBtn: {
    textTransform: 'none',
    color: '#fff',
    backgroundColor: lightBlue[500],
    '&:hover': {
      backgroundColor: lightBlue[700],
    },
    marginTop: theme.spacing.unit * 3,
  },
  submit: {
    textTransform: 'none',
    color: '#fff',
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
    marginTop: theme.spacing.unit * 3,
  },
});

class Index extends Component {
  static propTypes = {classes: PropTypes.object.isRequired};

  state = {
    usernameOrEmail: '',
    password: '',
    rememberMe: false
  };

  handleChange = e => this.setState({[e.target.name]: e.target.value});

  handleCheckBox = e => this.setState({[e.target.value]: e.target.checked});

  submitForm = e => {
    e.preventDefault();
    const {usernameOrEmail, password, rememberMe} = this.state;

    this.props.loginSubmit({usernameOrEmail, password}, rememberMe);
  };

  render() {
    const {classes, login} = this.props;
    const redirectPath = login.loggedUser && login.loggedUser.role.id === 1 ? "/admin-panel" : "/";

    return login.loggedIn ? <Redirect to={redirectPath} push={true}/>
      : (<main className={classes.main}>
          <CssBaseline/>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}><LockOutlinedIcon/></Avatar>
            <Typography component="h1" variant="h5">Sign in</Typography>
            <form className={classes.form} onSubmit={this.submitForm}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="usernameOrEmail">Username or Email</InputLabel>
                <Input id="usernameOrEmail" name="usernameOrEmail" value={this.state.usernameOrEmail}
                       autoComplete="usernameOrEmail" onChange={this.handleChange} autoFocus/>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input name="password" type="password" value={this.state.password} onChange={this.handleChange}
                       id="password" autoComplete="current-password"/>
              </FormControl>
              <FormControlLabel label="Remember me"
                                control={<Checkbox checked={this.state.rememberMe} value="rememberMe"
                                                   onChange={this.handleCheckBox} color="primary"/>}/>
              <Grid container spacing={8}>
                <Grid item xs={4}>
                  <Button color="primary" to="/" className={classes.backBtn} exact component={NavLink} fullWidth><ArrowBack/>&nbsp;HomePage</Button>
                </Grid>
                <Grid item xs={8}>
                  <Button type="submit" variant="contained" color="secondary" className={classes.submit} fullWidth>Sign in</Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </main>
      );
  }
}

const mapStateToProps = ({login}) => ({login});

const mapDispatchToProps = {loginSubmit};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Index));