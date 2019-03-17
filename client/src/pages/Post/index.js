import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {deletePost, fetchPosts, loadPost} from '../../actions/post';
import {fetchCategories} from '../../actions/category';
import PostTable from './components/PostTable';
import Header from "../../components/Header";

class Post extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchCategories();
  }

  render() {
    const {post, loadPost, deletePost} = this.props;

    return (
      <div>
        <Header/>
        <PostTable postList={post.postList} categoryList={post.categoryList} loadPost={loadPost} deletePost={deletePost}/>
      </div>
    );
  }
}

const mapStateToProps = ({post}) => ({post});

const mapDispatchToProps = {fetchPosts, fetchCategories, loadPost, deletePost};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
