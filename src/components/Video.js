import React, { Component } from "react"
import YouTube from 'react-youtube';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import '../css/Header.css';
import { Drawer, Grid } from '@material-ui/core';
import Form from './Form';
import ButtonClose from './ButtonClose';
import ButtonContact from './ButtonContact';
class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            myVideo: undefined,
            findCountryName: props.countryName
        };
    }

    componentDidMount() {
        let url = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyC_kX9In6aA3pSlkHV7kkT10iuSx86EiGs&maxResults=1&q=travel+" + this.state.findCountryName;
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        myVideo: result.items[0]
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1

            }
        };
        const { error, isLoaded, myVideo, findCountryName } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <Grid container 
                    direction="row"
                    justify="center"
                    alignItems="center"
                    marginTop='20px'>
                    <YouTube
                        videoId={myVideo.id.videoId}
                        opts={opts}
                        onReady={this._onReady}
                    />
                    </Grid>
                </div>
            );
        }
    }
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}

export default Video;
