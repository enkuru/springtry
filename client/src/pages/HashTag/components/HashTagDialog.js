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
  InputLabel
} from "@material-ui/core";
import {connect} from "react-redux";
import {saveHashTag, updateHashTag} from '../../../actions/hashTag';
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

class HashTagDialog extends Component {
  static propTypes = {classes: PropTypes.object.isRequired};

  state = {
    ...this.props.hashTag.currentHashTag,
    showModal: this.props.hashTag.showModal,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      showModal: nextProps.hashTag.showModal,
      ...nextProps.hashTag.currentHashTag,
    });
  }

  handleChange = e => this.setState({[e.target.name]: e.target.value});

  handleModal = modalState => this.setState({showModal: modalState});

  saveOrUpdate = e => {
    e.preventDefault();
    const {id, name} = this.state;
    const hashTag = {id, name};

    hashTag.id ? this.props.updateHashTag(hashTag) : this.props.saveHashTag(hashTag);
  };

  render() {
    const {classes} = this.props;
    const onEditMode = !!this.state.id;
    const onClose = () => this.handleModal(false);

    return (
      <div>
        <Dialog open={this.state.showModal} onClose={onClose} aria-labelledby="responsive-dialog-title">
          <DialogTitle id="responsive-dialog-title"
                       align="center">{onEditMode ? "Edit HashTag" : "New HashTag"}</DialogTitle>
          <DialogContent>
            <form className={classes.form} onSubmit={this.saveOrUpdate}>
              <FormControl margin="normal" fullWidth required>
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input value={this.state.name} id="name" name="name" onChange={this.handleChange} autoFocus/>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button className={classes.btn} onClick={onClose} variant="outlined" color="secondary">Cancel</Button>
            <Button className={classes.btn} type="submit" variant="outlined" color="primary">{onEditMode ? "Update" : "Save"}</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = ({hashTag}) => ({hashTag});

const mapDispatchToProps = {saveHashTag, updateHashTag};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(HashTagDialog));