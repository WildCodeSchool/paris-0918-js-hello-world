import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


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
    height: 30,
  },
};

class ButtonQuiz extends Component {
  render() {
    const { classes, clique } = this.props;
    return (
      <Button onClick={clique} className={classes.button} variant="text" color="primary">
        <img src={require('../images/iconQuiz.png')} className={classes.icon} alt="button quiz" />
      </Button>
    );
  }
}

export default withStyles(styles)(ButtonQuiz);

