import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Contact from '@material-ui/icons/Message';


const styles = {
  button: {
    color: '#FFF',
    // border: '#FFF',
    '&:hover': {
      border: 'solid 1px #FFF',
    },
  },
  icon: {
    color: '#FFF',
  },
};

class ButtonContact extends Component {
  render() {
    const { classes, clique } = this.props;
    return (
      <Button onClick={clique} className={classes.button} variant="text" color="primary">
        <Contact className={classes.icon} />
      </Button>
    );
  }
}

export default withStyles(styles)(ButtonContact);
