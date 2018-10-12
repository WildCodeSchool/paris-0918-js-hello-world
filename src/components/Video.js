import React, { Component } from "react"
import YouTube from 'react-youtube';
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
        let url = "API a ajouter" + this.state.findCountryName;
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
                    <YouTube
                        videoId={myVideo.id.videoId}
                        opts={opts}
                        onReady={this._onReady}
                    />
                </div>
            );
        }
    }
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
        // event.target.playVideo();
    }
}

export default Video;
