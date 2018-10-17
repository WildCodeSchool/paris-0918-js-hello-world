import React, { Component } from "react";
import ImageGridList from "./GridPhotos"
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
        let api = "https://pixabay.com/api/?key=10254779-b58df8361cdd84c5b8f150886&page=1&per_page=5&image_type=photo&pretty=true&category=travel&q=tourist+"
        let url = api + this.state.findCountryPhoto;
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        //photos: result.items
                        photos: result.hits
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
                    {/* {photos.map(photo =>
                        <img src={photo.link} width="30%" height="20%" marginLeft="5px"/> 
                    )} */}
                    <ImageGridList photos={photos}/>
                </div>
            );
        }
    }
};
export default Photo