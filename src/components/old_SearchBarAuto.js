/* global fetch:false */

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Autocomplete from 'react-autocomplete';
import { Grid } from '@material-ui/core';
import ButtonShuffle from './ButtonShuffle';
import SlideInfos from './SlideInfos';

const styles = theme => ({
  root: {
    backgroundColor: '#aac9ee',
    padding: '1vh',
  },
  items: {
    margin: '1vw',
  },
});

class SearchBarAuto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      countries: undefined,
      searchCountries: undefined,
      country: '',
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
            searchCountries: result,
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


  handleOnChange = (event, value) => {
    const { countries } = this.state;
    if (countries !== undefined) {
      const newSearchCountries = countries.filter(c => c.name.toLowerCase()
        .includes(value.toLowerCase()));
      this.setState({
        country: value,
        searchCountries: newSearchCountries,
      });
    }
  }

  hanldeRenderItem = (item, isHighlighted) => {
    const { country } = this.state;
    if (country === undefined || country.length < 1) {
      return <p />;
    }
    return (
      <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
        {item.name}
      </div>);
  }

  handleOnSelect = (val) => {
    this.setState({
      country: val,
      showSlide: true,
    });
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
      error, isLoaded, searchCountries, country, showSlide,
    } = this.state;
    if (error) {
      return (
        <div>
          Error:
          {error.message}
        </div>);
    } if (!isLoaded) {
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
            {/* Call Search Country */}
          </Grid>
          <Grid item className={classes.items}>
            <ButtonShuffle travel={this.getRandomCountry} />
          </Grid>
          <Autocomplete
            inputProps={{ id: 'countries-autocomplete' }}
            getItemValue={item => item.name}
            items={searchCountries}
            renderItem={this.hanldeRenderItem}
            value={country}
            onChange={this.handleOnChange}
            onSelect={this.handleOnSelect}
          />
          <SlideInfos
            handleToUpdate={this.handleToUpdate}
            showSlide={showSlide}
            countryName={country}
          />
        </Grid>

      </div>
    );
  }
}

export default withStyles(styles)(SearchBarAuto);
