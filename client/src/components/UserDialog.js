import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles/index";

const styles = theme => ({
  btn: {
    textTransform: 'none'
  },
});

class UserDialog extends Component {
  static propTypes = {classes: PropTypes.object.isRequired};

  state = {
    showStatus: false,
  };

  changeShowStatus = (showStatus) => {
    this.setState({showStatus: showStatus});
  };

  render() {
    const {onEditMode} = this.props;
    const {btn} = this.props.classes;

    return (
      <div>
        <Button variant="outlined" color="primary" className={btn} onClick={() => this.changeShowStatus(true)}>
          {onEditMode ? "Edit" : "Add"}
        </Button>
        <Dialog open={this.state.showStatus} onClose={this.handleClose}
                aria-labelledby="responsive-dialog-title">
          <DialogTitle id="responsive-dialog-title">{onEditMode ? "Edit User" : "Add User"}</DialogTitle>
          <DialogContent>

          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.changeShowStatus(false)} color="primary">Disagree</Button>
            <Button onClick={() => this.changeShowStatus(false)} color="primary" autoFocus>Agree</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(UserDialog);