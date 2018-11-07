import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
// import '../css/AnswerOption.css';

const styles = {
  valid: {
    width: '140px',
    height: 'auto',
    backgroundColor: '#5883b5',
    color: '#FFF',
    padding: 5,
    '&:hover': {
      backgroundColor: '#5883b5',
      opacity: '0.5',
    },
  },

  wrong: {
    width: '140px',
    height: 'auto',
    backgroundColor: '#cf000f',
    color: '#FFF',
    padding: 5,
    '&:hover': {
      backgroundColor: '#cf000f',
    },
    opacity: '0.75',
  },
};

class AnswerOption extends React.Component {
  state = {
    valid: true,
    isClicked: false,
  }

  componentDidUpdate(prevProps) {
    const { proposal } = this.props;
    if (proposal !== prevProps.proposal) {
      this.setState({
        isClicked: false,
      });
    }
  }

  handlOnClick = (e) => {
    const { correct, next } = this.props;
    const { isClicked } = this.state;

    e.preventDefault();
    if (!isClicked) {
      if (correct) {
        this.setState({
          isClicked: true,
        });
        next();
      } else {
        this.setState({
          valid: false,
          isClicked: true,
        });
      }
    }
  }

  render() {
    const { classes, proposal } = this.props;
    const { valid } = this.state;
    const typeAnswer = valid ? classes.valid : classes.wrong;

    return (
      <Button variant="text" onClick={this.handlOnClick} className={typeAnswer}>
        <h3>{proposal}</h3>
      </Button>
    );
  }
}

export default withStyles(styles)(AnswerOption);
