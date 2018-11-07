import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Drawer, Grid } from '@material-ui/core';
import Slider from 'react-slick';
import '../css/slick-theme.css';
import ButtonClose from './ButtonClose';
import Country from './Country';
import GalleryPhoto from './GalleryPhoto';
import Video from './Video';


const styles = theme => ({
  root: {
    height: '100%',
    backgroundColor: '#F3F8FF',
    [theme.breakpoints.up('xs')]: {
      width: '100vw',
    },
    [theme.breakpoints.up('sm')]: {
      width: '60vw',
    },
    [theme.breakpoints.up('md')]: {
      width: '50vw',
    },
    [theme.breakpoints.up('lg')]: {
      width: '40vw',
    },
  },
  // Button close
  button: {
    margin: '1vh',
  },
  containerButton: {
    backgroundColor: '#aac9ee',
  },
  // Part slide
  slideSolo: {
    height: '100%',
    width: '80%',
    backgroundColor: 'rgba(170, 201, 238, 0.15)',
  },
});

class SlideInfos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      index: value,
    });
  };

  render() {
    const {
      classes, countryName, showSlide, handleToUpdate,
    } = this.props;
    const { index } = this.state;
    // Settings slick
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      arrows: true,
    };

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
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item className={classes.slideSolo}>
                <Slider
                  {...settings}
                  onChange={this.handleChange}
                  value={index}
                >
                  <div><Country countryName={countryName} /></div>
                  <div>
                    <GalleryPhoto countryName={countryName} />
                    <Video countryName={countryName} />
                  </div>
                </Slider>
              </Grid>
            </Grid>
          </div>
        </Drawer>
      </div>

    );
  }
}

SlideInfos.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SlideInfos);
