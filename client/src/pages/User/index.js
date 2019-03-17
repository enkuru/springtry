import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchRoles} from '../../actions/role';
import {deleteUser, fetchUsers, loadUser} from '../../actions/user';
import UserTable from './components/UserTable';
import Header from "../../components/Header";

class User extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.fetchRoles();
    this.props.fetchUsers();
  }

  render() {
    const {user, loadUser, deleteUser} = this.props;

    return (
      <div>
        <Header/>
        <UserTable roleList={user.roleList} userList={user.userList} loadUser={loadUser} deleteUser={deleteUser}/>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({user});

const mapDispatchToProps = {fetchRoles, fetchUsers, loadUser, deleteUser};

export default connect(mapStateToProps, mapDispatchToProps)(User);
