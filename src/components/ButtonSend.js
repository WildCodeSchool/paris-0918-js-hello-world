import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import IconSend from '@material-ui/icons/Send';


const styles = {
  button: {
    backgroundColor: '#5883b5',
    padding: 0,
    width: '100px',
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

class ButtonSend extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Button className={classes.button} variant="text">
        <p className={classes.buttonText}>
          Send
        </p>
        <IconSend className={classes.icon} />
      </Button>
    );
  }
}

export default withStyles(styles)(ButtonSend);
