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
import {connect} from "react-redux";
import {saveCategory, updateCategory} from '../../../actions/category';
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

class CategoryDialog extends Component {
  static propTypes = {classes: PropTypes.object.isRequired};

  state = {
    ...this.props.category.currentCategory,
    showModal: this.props.category.showModal,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      showModal: nextProps.category.showModal,
      ...nextProps.category.currentCategory,
    });
  }

  handleChange = e => this.setState({[e.target.name]: e.target.value});

  handleModal = modalState => this.setState({showModal: modalState});

  saveOrUpdate = e => {
    e.preventDefault();
    const {id, name, parentCategoryId} = this.state;
    const category = {id, name};

    category.parentCategory = parentCategoryId ? {id: parentCategoryId} : undefined;

    category.id ? this.props.updateCategory(category) : this.props.saveCategory(category);
  };

  render() {
    const {classes, categoryList} = this.props;
    const onEditMode = !!this.state.id;
    const onClose = () => this.handleModal(false);

    return (
      <div>
        <Dialog open={this.state.showModal} onClose={onClose} aria-labelledby="responsive-dialog-title">
          <DialogTitle id="responsive-dialog-title" align="center">
            {onEditMode ? "Edit Category" : "New Category"}
          </DialogTitle>
          <DialogContent>
            <form className={classes.form} onSubmit={this.saveOrUpdate}>
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="parentCategory">Parent Category</InputLabel>
                <Select id="parentCategory" value={this.state.parentCategoryId || 0} onChange={this.handleChange} name="parentCategoryId">
                  {categoryList.map(parent => (<MenuItem key={parent.id} value={parent.id}>{parent.name}</MenuItem>))}
                </Select>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
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

const mapStateToProps = ({category}) => ({category});

const mapDispatchToProps = {saveCategory, updateCategory};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CategoryDialog));