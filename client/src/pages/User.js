import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

import UserTable from './../components/UserTable';

const styles = theme => ({

});

class User extends Component {
  static propTypes = {classes: PropTypes.object.isRequired};

  state = {};

  render() {
    const {classes} = this.props;

    return (
      <div>
        <UserTable/>
      </div>
    );
  }
}

export default withStyles(styles)(User);