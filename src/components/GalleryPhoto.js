/* global fetch:false */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { GridList, GridListTile } from '@material-ui/core';

import Lightbox from 'react-images';

const styles = theme => ({
  root: {
    display: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    margin: '5%',
  },
  gridList: {
    width: 'auto',
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
      lightboxIsOpen: false,
      currentImage: 0,
    };
  }

  componentDidMount() {
    const { findCountryPhoto } = this.state;
    const api = 'https://pixabay.com/api/?key=10254779-b58df8361cdd84c5b8f150886&page=1&per_page=9&image_type=photo&pretty=true&category=travel&q=tourist+';
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

  openLightbox = (index, event) => {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox = () => {
    this.setState({
      lightboxIsOpen: false,
      currentImage: 0,
    });
  }

  gotoPrevious = () => {
    const { currentImage } = this.state;
    this.setState({
      currentImage: currentImage - 1,
    });
  }

  gotoNext = () => {
    const { currentImage } = this.state;
    this.setState({
      currentImage: currentImage + 1,
    });
  }

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };


  render() {
    const { classes } = this.props;
    const {
      error, isLoaded, photosRes, lightboxIsOpen, currentImage,
    } = this.state;

    const imgLightbox = [];

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
        <div className={classes.root}>
          <GridList cellHeight={100} className={classes.gridList} cols={3} spacing={0}>
            {photosRes.map((photo, i) => (
              <GridListTile key={i} onClick={e => this.openLightbox(i, e)}>
                <img src={photo.largeImageURL} alt={photo.title} />
                {imgLightbox.push({ src: photo.largeImageURL })}
              </GridListTile>
            ))}
            <Lightbox
              currentImage={currentImage}
              images={imgLightbox}
              isOpen={lightboxIsOpen}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              onClose={this.closeLightbox}
              backdropClosesModal
              enableKeyboardInput
            />
          </GridList>
        </div>
      </div>
    );
  }
}
GalleryPhoto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GalleryPhoto);
