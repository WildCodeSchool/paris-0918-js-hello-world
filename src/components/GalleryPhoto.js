/* global fetch:false */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { GridList, GridListTile } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: '50%',
  },
  subheader: {
    width: '100%',
  },
});

class GalleryPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      photosRes: [],
      findCountryPhoto: props.countryName,
    };
  }

  componentDidMount() {
    const { findCountryPhoto } = this.state;
    const api = 'https://pixabay.com/api/?key=10254779-b58df8361cdd84c5b8f150886&page=1&per_page=5&image_type=photo&pretty=true&category=travel&q=tourist+';
    const url = api + findCountryPhoto;
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            photosRes: result.hits,
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

  render() {
    const { classes } = this.props;
    const { error, isLoaded, photosRes } = this.state;
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
      <div key={photosRes.name}>
        <GridList cellHeight={300} className={classes.gridList} cols={3}>
          {photosRes.map(photo => (
            <GridListTile key={photo.largeImageURL} cols={1}>
              <img src={photo.largeImageURL} alt={photo.title} />
              {/* <img src={photo.link} alt={photo.title} /> */}
            </GridListTile>
          ))}
        </GridList>
        {/* <ImageGridList photos={photos} /> */}
      </div>
    );
  }
}

GalleryPhoto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GalleryPhoto);
