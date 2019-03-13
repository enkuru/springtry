import React, {Component} from 'react';
import Header from "../../../components/Header";

class AdminPanel extends Component {
  static propTypes = {};

  state = {};

  render() {
    return (
      <div>
        <Header/>
        <div>This is Admin Home!!</div>
      </div>
    );
  }
}

export default AdminPanel;