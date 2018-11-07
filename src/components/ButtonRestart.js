import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  button: {
    backgroundColor: '#5883b5',
    padding: 0,
    width: '200px',
    height: '120px',
    '&:hover': {
      backgroundColor: '#5883b5',
      opacity: '0.2',
    },
  },
  buttonText: {
    color: '#FFF',
  },
  icon: {
    color: '#FFF',
    marginLeft: 7,
  },
};

class ButtonRestart extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Button className={classes.button} variant="text">
        <h3 className={classes.buttonText}>
          Restart
        </h3>
      </Button>
    );
  }
}

export default withStyles(styles)(ButtonRestart);
