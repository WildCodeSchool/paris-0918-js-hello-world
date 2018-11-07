import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import SlideForm from './SlideForm';
import SlideQuiz from './SlideQuiz';

import ButtonContact from './ButtonContact';
import ButtonQuiz from './ButtonQuiz';

const styles = theme => ({
  header: {
    backgroundColor: '#7FBAFF',
    color: '#FFF',
    textAlign: 'center',
    paddingTop: 8,
    paddingBottom: 8,

  },
  logo: {
    maxWidth: '65vw',
    height: 'max-content',
    [theme.breakpoints.up('sm')]: {
    },
  },
});

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSlide: false,
      showSlideQuiz: false,
    };
  }

  handleToUpdate = () => {
    this.setState({
      showSlide: false,
      showSlideQuiz: false,
    });
  }

  handleOpenSlide = () => {
    this.setState({
      showSlide: true,
    });
  };

  handleOpenSlideQuiz = () => {
    this.setState({
      showSlideQuiz: true,
    });
  };

  render() {
    const { classes } = this.props;
    const { showSlide, showSlideQuiz } = this.state;
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
            xs={2}
            onClick={this.handleOpenSlideQuiz}
          >
            <ButtonQuiz />
          </Grid>
          <Grid
            item
            xs={8}
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
          <SlideQuiz
            handleToUpdate={this.handleToUpdate}
            showSlide={showSlideQuiz}
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
