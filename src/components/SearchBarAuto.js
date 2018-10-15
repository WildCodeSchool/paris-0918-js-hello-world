import React, { Component } from "react";
import Autocomplete from "react-autocomplete";
import Country from './Country'; // componant prive
import Photos from './Photo';
import Modal from 'react-modal';
import Video from './Video';
import BoutonEnter from "./BoutonEnter";
import BoutonShuffle from "./BoutonShuffle"
import { Grid } from "@material-ui/core";

class SearchBarAuto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            error: null,
            isLoaded: false,
            countries: undefined,
            searchCountries: undefined,
            country: ""

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
    openModal = (event) => {
        event.preventDefault();
        this.setState({
            showModal: true
        })  // this.doOpenModal();
    }
    // doOpenModal = () => {
    //     this.setState({
    //         showModal: true
    //     })

    // }
    closeModal = () => {
        this.setState({
            showModal: false
        })
    }
    // handleOnChange = (event) => {
    //     this.setState({
    //         country: event.target.value
    //     })
    // }
    handleOnChange = (event, value) => {
        if (this.state.countries !== undefined) {
            let newSearchCountries = this.state.countries.filter(c => c.name.toLowerCase().includes(value.toLowerCase()));
            this.setState({
                country: value,
                searchCountries: newSearchCountries
            });
        }
    }
    // handleOnChange = (event, value) => {
    //     if (this.state.countries !== undefined) {
    //         let newSearchCountries = this.state.countries.filter(c => c.name.toLowerCase().includes(value.toLowerCase()));
    //         this.setState({
    //             country: value,
    //             searchCountries: newSearchCountries
    //         });
    //     }
    // }
    hanldeRenderItem = (item, isHighlighted) => {
        if (this.state.country === undefined || this.state.country.length < 1) {
            return (<h1 />);
        } else {
            return (
                <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                    {item.name}
                </div>)
        }
    }
    handleOnSelect = (val) => {
        this.setState({
            country: val,
            showModal: true
        });
        // this.doOpenModal();
    }
    getRandomCountry = () => {
        let index = Math.round(Math.random() * (this.state.countries.length - 1));
        let randomCountry = this.state.countries[index];
        this.setState({
            country: randomCountry.name,
            showModal: true
        });
        // this.doOpenModal();
    }

    render() {
        const { error, isLoaded, searchCountries, country } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return (

                <div>
                    {/* <form onSubmit={this.openModal}></form> */}
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item>
                            <Autocomplete
                                inputProps={{ id: "countries-autocomplete" }}
                                getItemValue={(item) => item.name}
                                items={searchCountries}
                                renderItem={this.hanldeRenderItem}
                                value={country}
                                onChange={this.handleOnChange}
                                onSelect={this.handleOnSelect}
                            />
                        </Grid>
                        <Grid item>
                            <BoutonShuffle travel={this.getRandomCountry} />
                        </Grid>


                    </Grid>

                    {/* <BoutonEnter travel={this.openModal}/> */}


                    {/* <button onClick={this.openModal}>Show me more</button>
                    <button onClick={this.getRandomCountry}> Surprise me </button> */}

                    <Modal isOpen={this.state.showModal}  >
                        <div onClick={this.closeModal}>
                            <Country countryName={this.state.country} />
                        </div>
                        <div>
                            <Photos countryName={this.state.country} />
                        </div>
                        <div>
                            <Video countryName={this.state.country} />
                        </div>
                    </Modal>
                </div>

            )

        }
    }
};
export default SearchBarAuto;
