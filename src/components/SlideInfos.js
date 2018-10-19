import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Drawer, Grid } from '@material-ui/core';
import Slider from "react-slick";
import "../css/slick-theme.css"
import ButtonClose from './ButtonClose';
import Country from './Country';
import Photo from './Photo';
import Video from './Video';




const styles = theme => ({

  drawer: {
    height: '100vh',
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
      width: '40vw'
    },
  },
  // Button close
  button: {
    margin: '1.5vh'
  },
  containerButton: {
    backgroundColor: '#aac9ee',
  },
  // Part slide
  slide: {
    width: '80%',
    //marginTop:'5%',
    color: '#fff',
    margin:'O',
    padding:'0',
    backgroundColor: 'rgba(170, 201, 238, 0.15)'
  },
  slide1: {
    height: 'auto',
    color: '#6AC0FF',
    //backgroundColor: '#aac9ee',
    //border: 'solid 1px #aac9ee'
  },
  slide2: {
    height: '50vh',
    //backgroundColor: '#aac9ee',
    //border: 'solid 1px #aac9ee'
  },
  slide3: {
    height: '50vh',
    //backgroundColor: '#aac9ee',
    //border: 'solid 1px #aac9ee'
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


  // RENDER
  render() {
    const { classes, countryName } = this.props;
    const { index } = this.state;
    //Settings slick
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
          open={this.props.showSlide}
        >
          <div className={classes.drawer}>
            <Grid container className={classes.containerButton}
              direction="row"
              justify="center"
              alignItems="center">
              <Grid item className={classes.button} onClick={() => this.props.handleToUpdate()}>
                <ButtonClose />
              </Grid>
            </Grid>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              >
              <Grid  item className={classes.slide}>
                <Slider {...settings}
                  onChange={this.handleChange}
                  value={index}
                >
                  <div>
                    <h3><div className={classes.slide1}>{<Country countryName={countryName} />}</div></h3>
                  </div>
                  <div>
                    <h3><div className={classes.slide2}>{<Photo countryName={countryName} />}</div></h3>
                  </div>
                  <div>
                    <h3><div className={classes.slide3}>{/*<Video countryName={this.props.countryName} />*/}</div></h3>
                  </div>
                </Slider>
              </Grid>
            </Grid>
          </div>
        </Drawer>
      </div >

    );
  }
}

SlideInfos.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SlideInfos);