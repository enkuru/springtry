import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select
} from "@material-ui/core";
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
    showStatus: false,
    role: 10,
  };

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  changeShowStatus = (showStatus) => {
    this.setState({showStatus: showStatus});
  };

  render() {
    const {onEditMode, classes} = this.props;

    return (
      <div>
        <Button variant="outlined" color="primary" className={classes.btn} onClick={() => this.changeShowStatus(true)}>
          {onEditMode ? "Edit" : "Add"}
        </Button>
        <Dialog open={this.state.showStatus} onClose={this.handleClose} aria-labelledby="responsive-dialog-title">
          <DialogTitle id="responsive-dialog-title" align="center">{onEditMode ? "Edit User" : "Add User"}</DialogTitle>
          <DialogContent>
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input id="username" name="username" autoComplete="username" autoFocus/>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input name="email" type="email" id="email" autoComplete="current-email"/>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input name="password" type="password" id="password" autoComplete="current-password"/>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="role-required">Role</InputLabel>
                <Select value={this.state.role} onChange={this.handleChange} name="role"
                        inputProps={{id: 'role-required'}}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button className={classes.btn} onClick={() => this.changeShowStatus(false)}
                    variant="outlined" color="secondary">Cancel</Button>
            <Button className={classes.btn} onClick={() => this.changeShowStatus(false)}
                    variant="outlined" color="primary" autoFocus>{onEditMode ? "Update" : "Save"}</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(UserDialog);