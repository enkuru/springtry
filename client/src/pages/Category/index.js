import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {deleteCategory, fetchCategories, loadCategory} from '../../actions/category';
import CategoryTable from './components/CategoryTable';
import Header from "../../components/Header";

class Category extends Component {
  static propTypes = {
    category: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const {category, loadCategory, deleteCategory} = this.props;

    return (
      <div>
        <Header/>
        <CategoryTable categoryList={category.categoryList} loadCategory={loadCategory} deleteCategory={deleteCategory}/>
      </div>
    );
  }
}

const mapStateToProps = ({category}) => ({category});

const mapDispatchToProps = {fetchCategories, loadCategory, deleteCategory};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
