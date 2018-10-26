/* global fetch:false */

import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    flexGrow: '1',
    fontSize: '1.1em',
    color: '#315681',
    margin: 0,
    padding: 0,

  },
  imgFlag: {
    width: '60%',
    marginLeft: '20%',
  },
  titleName: {
    textAlign: 'center',
    fontSize: '1.2em',
  },
  titleInfos: {
    fontWeight: '500',
  },
  text: {
    textAlign: 'center',
  },

});

class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      country: undefined,
      findCountryName: props.countryName,
    };
  }

  componentDidMount() {
    const { findCountryName } = this.state;
    const url = `https://restcountries.eu/rest/v2/name/${findCountryName}`;
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            country: result[0],
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  /**
   * Format number: add , (111,111,111)
   * @param number
   */
  formatNumber = (n) => {
    if (n) {
      return n.toString().split('').reverse().map((e, i) => {
        if (i % 3 === 0 && i !== 0) {
          e += ',';
        }
        return e;
      })
        .reverse()
        .join('');
    }
    return '';
  }

  render() {
    const { classes } = this.props;
    const { error, isLoaded, country } = this.state;
    if (error) {
      return (
        <div>
          Error:
          {error.message}
        </div>
      );
    } if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div key={country.name} className={classes.root}>
        <Grid
          className={classes.titleName}
          container
          direction="column"
          justify="center"
          alignItems="center"
          alignContent="flex-start"
          spacing={0}
        >
          <Grid item xs={12}>
            <p>
              {country.name}
            </p>
          </Grid>
          <Grid item xs={12}>
            <img className={classes.imgFlag} src={country.flag} alt="Flag" />
          </Grid>
          <Grid item xs={12}>
            <p>
              <span className={classes.titleInfos}>Continent ▻&nbsp;</span>
              {country.region}
            </p>
          </Grid>
          <Grid item xs={12}>
            <p>
              <span className={classes.titleInfos}>Capital ▻&nbsp;</span>
              {country.capital}
            </p>
          </Grid>
          <Grid item xs={12}>
            <p>
              <span className={classes.titleInfos}>Currency ▻&nbsp;</span>
              {country.currencies.map(currency => currency.name).join(',')}
            </p>
          </Grid>
          <Grid item xs={12}>
            <p>
              <span className={classes.titleInfos}>Population ▻&nbsp;</span>
              {this.formatNumber(country.population)}
            </p>
          </Grid>
          <Grid item xs={12}>
            <p>
              <span className={classes.titleInfos}>Area ▻&nbsp;</span>
              {this.formatNumber(country.area)}
              <span> km²</span>
            </p>
          </Grid>
        </Grid>
      </div>
    );
  }
}


export default withStyles(styles)(Country);
