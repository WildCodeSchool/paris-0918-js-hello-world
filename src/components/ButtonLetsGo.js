import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import IconDirectionsRun from '@material-ui/icons/DirectionsRun';


const styles = {
  button: {
    backgroundColor: '#5883b5',
    padding: 0,
    width: '120px',
    '&:hover': {
      backgroundColor: '#5883b5',
      opacity: '0.2',
    },
  },
  buttonText: {
    color: '#FFF',
    textDecoration: 'none',
  },
  icon: {
    color: '#FFF',
    marginLeft: 7,
  },
};

class ButtonSend extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Button className={classes.button} variant="text">
        <a href="https://www.hotwire.com" className={classes.buttonText}>
          Let's GO
        </a>
        <IconDirectionsRun className={classes.icon} />
      </Button>
    );
  }
}

export default withStyles(styles)(ButtonSend);
