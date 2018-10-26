/* global fetch:false */

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
// import Autocomplete from "react-autocomplete";
import { Grid } from '@material-ui/core';
import ButtonShuffle from './ButtonShuffle';

import SlideInfos from './SlideInfos';
import SearchBar from './SearchBar';

const styles = () => ({
  root: {
    backgroundColor: '#aac9ee',
    // padding: '0.5vh',
  },
  items: {
    margin: '7px',
  },
});

class PartSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      countries: undefined,
      showSlide: false,
    };
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            countries: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  handleToUpdate = () => {
    this.setState({ showSlide: false });
  }

  getRandomCountry = () => {
    const { countries } = this.state;
    const index = Math.round(Math.random() * (countries.length - 1));
    const randomCountry = countries[index];
    this.setState({
      country: randomCountry.name,
      showSlide: true,
    });
  }

  render() {
    const { classes } = this.props;

    const {
      error, isLoaded, country, showSlide,
    } = this.state;

    if (error) {
      return (
        <div>
          Error:
          {error.message}
        </div>
      );
    }
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Grid
          container
          className={classes.root}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item className={classes.items}>
            <SearchBar />
          </Grid>

          <Grid item className={classes.items}>
            <ButtonShuffle travel={this.getRandomCountry} />
          </Grid>

        </Grid>
        <SlideInfos
          handleToUpdate={this.handleToUpdate}
          showSlide={showSlide}
          countryName={country}
        />

      </div>
    );
  }
}

export default withStyles(styles)(PartSearch);
