import React, {Component} from 'react';
import {connect} from "react-redux";

import {Redirect} from "react-router";
import Header from "../../components/Header";

class AdminPanel extends Component {
  render() {
    const {login} = this.props;
    return login.loggedIn && !!login.loggedUser && login.loggedUser.role.id ?
      <div>
        <Header/>
        <div>This is Admin Home!!</div>
      </div>
      : <Redirect to="/login"/>;
  }
}

const mapStateToProps = ({login}) => ({login});

export default connect(mapStateToProps)(AdminPanel);