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
import update from 'immutability-helper';
import RichTextEditor from 'react-rte';
import ChipInput from 'material-ui-chip-input'
import {connect} from "react-redux";
import {savePost, updatePost} from '../../../actions/post';
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

class PostDialog extends Component {
  static propTypes = {classes: PropTypes.object.isRequired};

  state = {
    ...this.props.post.currentPost,
    richContent: RichTextEditor.createValueFromString(this.props.post.currentPost.content || "", "html"),
    showModal: this.props.post.showModal
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      showModal: nextProps.post.showModal,
      ...nextProps.post.currentPost,
      richContent: RichTextEditor.createValueFromString(nextProps.post.currentPost.content, "html")
    });
  }

  handleChange = e => this.setState({[e.target.name]: e.target.value});

  handleRichInput = editorContent => this.setState({richContent: editorContent});

  handleModal = modalState => this.setState({showModal: modalState});

  addTag = tag => this.setState({tags: update(this.state.tags, {$push: [{name: tag}]})});

  removeTag = index => this.setState(update(this.state, {tags: {$splice: [[index, 1]]}}));

  saveOrUpdate = e => {
    e.preventDefault();

    const {id, subject, richContent: content, tags, categoryId} = this.state;
    const post = {id, subject, content: content.toString('html'), category: {id: categoryId}, tags};

    post.id ? this.props.updatePost(post) : this.props.savePost(post);
  };

  render() {
    const {classes, categoryList} = this.props;
    const onEditMode = !!this.state.id;
    const onClose = () => this.handleModal(false);

    return (
      <div>
        <Dialog open={this.state.showModal} onClose={onClose} maxWidth='lg' fullWidth={true} aria-labelledby="responsive-dialog-title">
          <DialogTitle id="responsive-dialog-title" align="center">{onEditMode ? "Edit Post" : "New Post"}</DialogTitle>
          <DialogContent>
            <form className={classes.form} onSubmit={this.saveOrUpdate}>
              <Grid container spacing={8}>
                <Grid item xs={6}>
                  <FormControl margin="normal" fullWidth required>
                    <InputLabel htmlFor="subject">Subject</InputLabel>
                    <Input value={this.state.subject} id="subject" name="subject" onChange={this.handleChange} autoFocus/>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl margin="normal" fullWidth required>
                    <InputLabel htmlFor="category">Category</InputLabel>
                    <Select id="category" value={this.state.categoryId} onChange={this.handleChange} name="categoryId">
                      {categoryList.map(category => (<MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <FormControl margin="normal" fullWidth required>
                <InputLabel htmlFor="content">Content</InputLabel>
                <RichTextEditor value={this.state.richContent} id="content" onChange={this.handleRichInput}/>
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <ChipInput id="tags" label="Hash Tags" value={this.state.tags.map((tag) => tag.name)}
                           onAdd={(tag) => this.addTag(tag)} onDelete={(chip, index) => this.removeTag(index)}/>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button className={classes.btn} onClick={onClose} variant="outlined" color="secondary">Cancel</Button>
            <Button className={classes.btn} type="submit" onClick={this.saveOrUpdate}
                    variant="outlined" color="primary">{onEditMode ? "Update" : "Save"}</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = ({post}) => ({post});

const mapDispatchToProps = {savePost, updatePost};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PostDialog));