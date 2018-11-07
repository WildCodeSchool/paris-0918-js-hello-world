import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid, Drawer,
} from '@material-ui/core';
import ButtonClose from './ButtonClose';
import Question from './Question';

const styles = theme => ({
  root: {
    height: '100%',
    backgroundColor: '#F3F8FF',
    [theme.breakpoints.up('xs')]: {
      width: '100vw',
    },
    [theme.breakpoints.up('sm')]: {
      width: '50vw',
    },
    [theme.breakpoints.up('md')]: {
      width: '40vw',
    },
    [theme.breakpoints.up('lg')]: {
      width: '30vw',
    },
  },
  titleContact: {
    color: '#5883b5',
    textAlign: 'center',
  },
  // Button close
  button: {
    margin: '1.5vh',
  },
  containerButton: {
    backgroundColor: '#aac9ee',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
    marginBottom: '4vh',
  },
  input: {
    color: '#5883b5',
    '&&&&:hover:before': {
      borderBottomColor: '#5883b5',
    },
    '&:before': {
      borderBottom: '1px solid #5883b5',
    },
    '&:after': {
      borderBottom: '1px solid #5883b5',
    },
  },
  inputLabel: {
    color: '#5883b5',
  },
  inputLabelShrink: {
    color: 'red',
  },
  menu: {
    width: '100%',
    color: '#5883b5',
  },
  selected: {
    backgroundColor: '#aac9ee !important',
  },
});

class SlideQuiz extends React.Component {

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes, handleToUpdate, showSlide } = this.props;
    return (
      <div>
        <Drawer
          docked="false"
          anchor="left"
          open={showSlide}
        >
          <div className={classes.root}>
            <Grid
              container
              className={classes.containerButton}
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item className={classes.button} onClick={() => handleToUpdate()}>
                <ButtonClose />
              </Grid>
            </Grid>
            <Question
              handleShowButtonRestart={this.handleShowButtonRestart}
            />
          </div>
        </Drawer>
      </div>
    );
  }
}


SlideQuiz.propTypes = {
  classes: PropTypes.object.isRequired,
  showSlide: PropTypes.bool.isRequired,

};

export default withStyles(styles)(SlideQuiz);
