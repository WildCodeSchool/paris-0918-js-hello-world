import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 600,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

const questions = [
  {
    value: '1st',
    label: 'First question',
  },
  {
    value: '2nd',
    label: 'Second question',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];


class TextFields extends React.Component {
  state = {
    // age: '',
    currency: '',

  };

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { currency } = this.state;
    return (
      <form className={classes.container} noValidate autoComplete="off">

        <TextField
          required
          id="standard-required"
          label="Name"
          className={classes.textField}
          margin="normal"
        />

        <TextField
          required
          id="standard-required"
          label="Mail"
          className={classes.textField}
          margin="normal"
        />

        <TextField
          id="standard-select-currency"
          select
          // label="Why"
          className={classes.textField}
          value={currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your question"
          margin="normal"
        >
          {questions.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-multiline-static"
          label="Your message"
          multiline
          rows="6"
          className={classes.textField}
          margin="normal"
        />
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
