import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
// import Autocomplete from "react-autocomplete";
import ButtonShuffle from "./ButtonShuffle"
import { Grid } from "@material-ui/core";
import SlideInfos from "./SlideInfos";
import SearchCountry from "./SearchCountry";

const styles = () => ({
    root: {
        backgroundColor: '#aac9ee',
        padding: '0.5vh'
    },
    items: {
        margin: '1vw'
    },
})

class PartSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            countries: undefined,
            showSlide: false,
        };
    };
    componentDidMount() {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        countries: result,
                        searchCountries: result
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    handleToUpdate = () => {
        this.setState({ showSlide: false })
    }

    getRandomCountry = () => {
        let index = Math.round(Math.random() * (this.state.countries.length - 1));
        let randomCountry = this.state.countries[index];
        this.setState({
            country: randomCountry.name,
            showSlide: true
        });
    }

    render() {
        const { classes } = this.props;
        const { error, isLoaded, searchCountries, country } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return (
                <div>
                    <Grid container className={classes.root}
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item className={classes.items}>
                            <SearchCountry />
                        </Grid>
                        <Grid item className={classes.items}>
                            <ButtonShuffle travel={this.getRandomCountry} />
                        </Grid>
                    </Grid>
                    <SlideInfos
                            handleToUpdate={this.handleToUpdate}
                            showSlide={this.state.showSlide}
                            countryName={country}
                        />

                </div>
            )
        }
    }
};

export default withStyles(styles)(PartSearch);
