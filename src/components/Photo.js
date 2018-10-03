import React, { Component } from "react";
class Photo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoad: false,
            photos: undefined,
            findCountryPhoto: props.countryName
        };
    };
    componentDidMount() {
        let url = "API a ajouter" + this.state.findCountryPhoto;
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        photos: result.items
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        const { error, isLoaded, photos } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div key={photos.name}>
                    {photos.map(photo =>
                        <img src={photo.link} width="20%" height="30%" />
                    )}
                </div>
            );
        }
    }
};
export default Photo