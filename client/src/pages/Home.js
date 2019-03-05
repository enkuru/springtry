import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';

const styles = {};

class Home extends Component {
  render() {
    return (
      <div>This is Home Dude!!</div>
    );
  }
}

export default withStyles(styles)(Home);