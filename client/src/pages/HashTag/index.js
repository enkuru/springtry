import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {deleteHashTag, fetchHashTags, loadHashTag} from '../../actions/hashTag';
import HashTagTable from './components/HashTagTable';
import Header from "../../components/Header";

class HashTag extends Component {
  static propTypes = {
    hashTag: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.fetchHashTags();
  }

  render() {
    const {hashTag, loadHashTag, deleteHashTag} = this.props;

    return (
      <div>
        <Header/>
        <HashTagTable hashTagList={hashTag.hashTagList} loadHashTag={loadHashTag} deleteHashTag={deleteHashTag}/>
      </div>
    );
  }
}

const mapStateToProps = ({hashTag}) => ({hashTag});

const mapDispatchToProps = {fetchHashTags, loadHashTag, deleteHashTag};

export default connect(mapStateToProps, mapDispatchToProps)(HashTag);
