/* global fetch:false */

import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { withStyles } from '@material-ui/core/styles';
import '../css/Header.css';
import { Grid } from '@material-ui/core';
import ButtonLetsGo from './ButtonLetsGo';
import Loader from './Loader';

const styles = theme => ({
  videoYT: {
    height: 'auto',
    width: '90%',
    margin: '5%',
    marginTop: 0,
  },
});

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      myVideo: undefined,
      findCountryName: props.countryName,
    };
  }

  componentDidMount() {
    const { findCountryName } = this.state;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.REACT_APP_YoutubeToken}&maxResults=1&q=travel${findCountryName}`;
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            myVideo: result.items[0],
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

  onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }


  render() {
    const { classes } = this.props;
    const opts = {
      height: 'auto',
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const { error, isLoaded, myVideo } = this.state;
    if (error) {
      return (
        <div>
          Error:
          {error.message}
        </div>
      );
    }
    if (!isLoaded) {
      return (
        <div><Loader /></div>
      );
    }
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item className={classes.videoYT}>
          <YouTube
            videoId={myVideo.id.videoId}
            opts={opts}
            onReady={this.onReady}
          />
        </Grid>
        <Grid item>
          <ButtonLetsGo />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Video);
