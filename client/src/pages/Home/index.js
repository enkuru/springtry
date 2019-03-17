import React, {Component} from 'react';
import Header from "../../components/Header";
import {fetchLastPosts} from "../../actions/home";

import {connect} from "react-redux";
import PostList from "./components/PostList";

class Home extends Component {

  componentDidMount() {
    this.props.fetchLastPosts();
  }

  render() {
    const {home} = this.props;

    return (
      <div>
        <Header/>
        <PostList postList={home.postList}/>
      </div>
    )
  }
}

const mapStateToProps = ({home}) => ({home});

const mapDispatchToProps = {fetchLastPosts};

export default connect(mapStateToProps, mapDispatchToProps)(Home);