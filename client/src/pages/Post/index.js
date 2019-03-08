import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {deletePost, fetchPosts, loadPost} from '../../actions/post';
import PostTable from './components/PostTable';

class Index extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const {post, loadPost, deletePost} = this.props;

    return (
      <div>
        <PostTable postList={post.postList} loadPost={loadPost} deletePost={deletePost}/>
      </div>
    );
  }
}

const mapStateToProps = ({post}) => ({post});

const mapDispatchToProps = {fetchPosts, loadPost, deletePost};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
