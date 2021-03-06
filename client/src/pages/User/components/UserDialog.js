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
import {saveUser, updateUser} from '../../../actions/user';
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
    roleId: this.props.user.currentUser.role.id,
    ...this.props.user.currentUser,
    showModal: this.props.user.showModal,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      roleId: nextProps.user.currentUser.role.id,
      showModal: nextProps.user.showModal,
      ...nextProps.user.currentUser,
    });
  }

  handleChange = e => this.setState({[e.target.name]: e.target.value});

  handleModal = modalState => this.setState({showModal: modalState});

  saveOrUpdate = e => {
    e.preventDefault();
    const {id, name, surname, username, email, password, roleId} = this.state;
    const user = {id, name, surname, username, email, password, role: {id: roleId}};

    user.id ? this.props.updateUser(user) : this.props.saveUser(user);
  };

  render() {
    const {classes, roleList} = this.props;
    const onEditMode = !!this.state.id;
    const onClose = () => this.handleModal(false);

    return (
      <div>
        <Dialog open={this.state.showModal} onClose={onClose} aria-labelledby="responsive-dialog-title">
          <DialogTitle id="responsive-dialog-title" align="center">{onEditMode ? "Edit User" : "New User"}</DialogTitle>
          <DialogContent>
            <form className={classes.form} onSubmit={this.saveOrUpdate}>
              <Grid container spacing={8}>
                <Grid item xs={6}>
                  <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="name">Name</InputLabel>
                    <Input value={this.state.name} id="name" name="name" onChange={this.handleChange}
                           autoFocus/>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="surname">Surname</InputLabel>
                    <Input value={this.state.surname} id="surname" name="surname" onChange={this.handleChange}/>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={8}>
                <Grid item xs={6}>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="username">Username</InputLabel>
                    <Input value={this.state.username} id="username" name="username" onChange={this.handleChange}/>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input value={this.state.email} name="email" type="email" id="email"
                           onChange={this.handleChange}/>
                  </FormControl>
                </Grid>
              </Grid>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="role-required">Role</InputLabel>
                <Select value={this.state.roleId} onChange={this.handleChange} name="roleId"
                        inputProps={{id: 'role-required'}}>
                  {roleList.map(role => (<MenuItem key={role.id} value={role.id}>{role.code}</MenuItem>))}
                </Select>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button className={classes.btn} onClick={onClose}
                    variant="outlined" color="secondary">Cancel</Button>
            <Button className={classes.btn} type="submit" variant="outlined" color="primary">{onEditMode ? "Update" : "Save"}</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({user});

const mapDispatchToProps = {saveUser, updateUser};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UserDialog));