import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import SubdirectoryArrowLeft from '@material-ui/icons/SubdirectoryArrowLeft';

const styles = {
  button: {
    backgroundColor: '#5883b5',
    '&:hover': {
      backgroundColor: '#5883b5',
      opacity: '0.2',
    },
  },
  icon: {
    color: '#FFF',
  },
};

class ButtonEnter extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Button className={classes.button} variant="text" color="primary">
        <SubdirectoryArrowLeft className={classes.icon} />
      </Button>
    );
  }
}

export default withStyles(styles)(ButtonEnter);
