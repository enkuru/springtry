import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';

import {fetchRoles} from './../actions/role';
import {fetchUsers, loadUser} from './../actions/user';
import UserTable from './../components/UserTable';

const styles = theme => ({});

class User extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.fetchRoles();
    this.props.fetchUsers();
  }

  render() {
    const {user, loadUser} = this.props;

    return (
      <div>
        <UserTable roleList={user.roleList} userList={user.userList} loadUser={loadUser}/>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => {
  return {user};
};

const mapDispatchToProps = {fetchRoles, fetchUsers, loadUser};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(User));
