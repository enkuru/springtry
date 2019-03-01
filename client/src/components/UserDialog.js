import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select
} from "@material-ui/core";
import {connect} from "react-redux";
import {saveUser} from './../actions/user';
import {withStyles} from "@material-ui/core/styles/index";

const styles = theme => ({
  btn: {
    textTransform: 'none'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class UserDialog extends Component {
  static propTypes = {classes: PropTypes.object.isRequired};

  state = {
    user: this.props.user.currentUser,
    showModal: this.props.user.showModal,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      showModal: nextProps.user.showModal,
      user: nextProps.user.currentUser,
    });
  }

  handleChange = e => this.setState({[e.target.name]: e.target.value});

  handleModal = modalState => this.setState({showModal: modalState});

  saveUser = () => {

  };

  render() {
    const {classes, roleList} = this.props;
    const onEditMode = !!this.state.user.id;
    const onClose = () => this.handleModal(false);

    return (
      <div>
        <Dialog open={this.state.showModal} onClose={onClose} aria-labelledby="responsive-dialog-title">
          <DialogTitle id="responsive-dialog-title" align="center">{onEditMode ? "Edit User" : "New User"}</DialogTitle>
          <DialogContent>
            <form className={classes.form}>
              <Grid container spacing={8}>
                <Grid item xs={6}>
                  <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="name">Name</InputLabel>
                    <Input value={this.state.user.name} id="name" name="name" autoComplete="name"
                           onChange={this.handleChange} autoFocus/>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="surname">Surname</InputLabel>
                    <Input value={this.state.user.surname} id="surname" name="surname" onChange={this.handleChange}
                           autoComplete="surname"/>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={8}>
                <Grid item xs={6}>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="username">Username</InputLabel>
                    <Input value={this.state.user.username} id="username" name="username" onChange={this.handleChange}
                           autoComplete="username"/>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input value={this.state.user.email} name="email" type="email" id="email"
                           onChange={this.handleChange} autoComplete="current-email"/>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={8}>
                <Grid item xs={6}>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input value={this.state.user.password} name="password" type="password" id="password"
                           onChange={this.handleChange} autoComplete="current-password"/>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="role-required">Role</InputLabel>
                    <Select value={this.state.user.role.id} onChange={this.handleChange} name="role"
                            inputProps={{id: 'role-required'}}>
                      {roleList.map(role => (<MenuItem key={role.id} value={role.id}>{role.code}</MenuItem>))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </form>
          </DialogContent>
          <DialogActions>
            <Button className={classes.btn} onClick={onClose}
                    variant="outlined" color="secondary">Cancel</Button>
            <Button className={classes.btn} onClick={this.saveUser}
                    variant="outlined" color="primary" autoFocus>{onEditMode ? "Update" : "Save"}</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => {
  return {user};
};

const mapDispatchToProps = {saveUser};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UserDialog));