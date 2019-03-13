import React, {Component} from 'react';
import {authMe} from "../../actions/login";
import {connect} from "react-redux";
import {Redirect} from "react-router";

class Index extends Component {
  render() {
    const {login} = this.props;

    return login.loggedIn ? (
      <div>This is Home Dude!!</div>
    ) : <Redirect to="/login"/>;
  }
}


const mapStateToProps = ({login}) => ({login});

const mapDispatchToProps = {authMe};

export default connect(mapStateToProps, mapDispatchToProps)(Index);