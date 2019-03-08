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
import RichTextEditor from 'react-rte';
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
    richContent: RichTextEditor.createValueFromString(this.props.post.content || "", "html"),
    showModal: this.props.post.showModal
  };

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      showModal: nextProps.post.showModal,
      ...nextProps.post.currentPost,
      richContent: RichTextEditor.createValueFromString(this.state.content, "html")
    });
  }

  handleChange = e => this.setState({[e.target.name]: e.target.value});

  handleRichInput = editorContent => this.setState({richContent: editorContent});

  handleModal = modalState => this.setState({showModal: modalState});

  saveOrUpdatePost = () => {
    const {id, subject, richContent, tags} = this.state;
    const post = {id, subject, content: richContent.toString('html'), tags};

    post.id ? this.props.updatePost(post) : this.props.savePost(post);
  };

  render() {
    const {classes} = this.props;
    const onEditMode = !!this.state.id;
    const onClose = () => this.handleModal(false);

    return (
      <div>
        <Dialog open={this.state.showModal} onClose={onClose} aria-labelledby="responsive-dialog-title">
          <DialogTitle id="responsive-dialog-title" align="center">{onEditMode ? "Edit Post" : "New Post"}</DialogTitle>
          <DialogContent>
            <form className={classes.form}>
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="subject">Subject</InputLabel>
                <Input value={this.state.subject} id="subject" name="subject" onChange={this.handleChange} autoFocus/>
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="content">Content</InputLabel>
                <RichTextEditor value={this.state.richContent} id="content" name="content"
                                onChange={this.handleRichInput}/>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button className={classes.btn} onClick={onClose} variant="outlined" color="secondary">Cancel</Button>
            <Button className={classes.btn} onClick={this.saveOrUpdatePost} variant="outlined"
                    color="primary">{onEditMode ? "Update" : "Save"}</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = ({post}) => ({post});

const mapDispatchToProps = {savePost, updatePost};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PostDialog));