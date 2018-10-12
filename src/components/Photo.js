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
        let url = "https://www.googleapis.com/customsearch/v1?key=AIzaSyDy0f8cqSd40ZwIH6w3i74TIrCOUuUEB9U&cx=009955408747414043287:ibxkpos9m3w&searchType=image&num=5&q=travel%20" + this.state.findCountryPhoto;
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        // photos: result.items
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