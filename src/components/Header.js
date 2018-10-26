import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import SlideForm from './SlideForm';
import ButtonContact from './ButtonContact';

const styles = theme => ({
  header: {
    backgroundColor: '#7FBAFF',
    color: '#FFF',
    textAlign: 'center',
    padding: 8,
  },
  logo: {
    width: 'auto',
    height: 'max-content',
    [theme.breakpoints.up('sm')]: {
      marginLeft: '16.5vw',
    },
  },
});

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSlide: false,
    };
  }

  // handleToggle = () => this.setState({ open: !this.state.open })

  // handleClose = () => this.setState({ showSlide: false });

  handleToUpdate = () => {
    this.setState({ showSlide: false });
  }

  handleOpenSlide = () => {
    this.setState({
      showSlide: true,
    });
  };

  render() {
    const { classes } = this.props;
    const { showSlide } = this.state;
    return (
      <div className={classes.header}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          alignContent="center"
          wrap="nowrap"

        >
          <Grid
            item
            xs={10}
          >
            <img className={classes.logo} src={require('../images/Logo.svg')} alt="Logo" />
          </Grid>
          <Grid
            item
            xs={2}
            onClick={this.handleOpenSlide}
          >
            <ButtonContact />
          </Grid>
        </Grid>
        <div className={classes.slideForm}>
          <SlideForm
            handleToUpdate={this.handleToUpdate}
            showSlide={showSlide}
          />
        </div>
      </div>
    );
  }
}


Header.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Header);
