import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';

const styles = {};

class Index extends Component {
  render() {
    return (
      <div>This is Home Dude!!</div>
    );
  }
}

export default withStyles(styles)(Index);