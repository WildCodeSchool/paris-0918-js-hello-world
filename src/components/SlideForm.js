import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  MenuItem, TextField, Grid, Drawer,
} from '@material-ui/core';
import ButtonSend from './ButtonSend';
import ButtonClose from './ButtonClose';

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

const questions = [
  {
    value: '1st',
    label: 'Report a bug',
  },
  {
    value: '2nd',
    label: 'I have many things to tell you',
  },
];

class SlideForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: '',
    };
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes, handleToUpdate, showSlide } = this.props;
    const { currency } = this.state;
    return (
      <div>
        <Drawer
          docked="false"
          anchor="right"
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
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={10}>
                <form className={classes.containerForm} noValidate autoComplete="off">
                  <h1 className={classes.titleContact}>Contact US</h1>
                  <TextField
                    required
                    id="standard-required"
                    label="Name"
                    className={classes.textField}
                    margin="normal"
                    InputProps={{
                      className: classes.input,
                    }}
                    InputLabelProps={{
                      className: classes.inputLabel,
                    }}
                  />
                  <TextField
                    required
                    id="standard-required"
                    label="Mail"
                    className={classes.textField}
                    margin="normal"
                    InputProps={{ className: classes.input }}
                    InputLabelProps={{ className: classes.inputLabel }}
                  />
                  <TextField
                    id="standard-select-currency"
                    select
                    label="Why are you contacting us ?"
                    className={classes.textField}
                    value={currency}
                    margin="normal"
                    onChange={this.handleChange('currency')}
                    SelectProps={{
                      className: classes.menu,
                    }}
                    InputProps={{ className: classes.input }}
                    InputLabelProps={{ className: classes.inputLabel }}
                  >
                    {questions.map(option => (
                      <MenuItem
                        key={option.value}
                        value={option.value}
                        classes={{ selected: classes.selected }}
                      >
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    id="standard-multiline-static"
                    label="Your message"
                    multiline
                    rows="5"
                    className={classes.textField}
                    margin="normal"
                    InputProps={{
                      className: classes.input,
                    }}
                    InputLabelProps={{
                      className: classes.inputLabel,
                    }}
                  />
                </form>
              </Grid>
              <Grid item xs={4}>
                <ButtonSend />
              </Grid>
            </Grid>
          </div>
        </Drawer>
      </div>
    );
  }
}


SlideForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SlideForm);
