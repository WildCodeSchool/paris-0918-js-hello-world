import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Less from '@material-ui/icons/Remove';


const styles = {
  button: {
    backgroundColor: '#5883b5',
    '&:hover': {
      backgroundColor: '#5883b5',
      opacity: '0.5',
    },
  },
  icon: {
    color: '#FFF',
  },
};

class ButtonLess extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Button className={classes.button} mini variant="fab" color="primary">
        <Less className={classes.icon} />
      </Button>
    );
  }
}

export default withStyles(styles)(ButtonLess);
