import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Autocomplete from "react-autocomplete";
import ButtonShuffle from "./ButtonShuffle"
import { Grid, InputBase } from "@material-ui/core";
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';

import SlideInfos from "./SlideInfos";

const styles = theme => ({

    root: {
        backgroundColor: '#aac9ee',
        padding: '1vh'
    },
    items: {
        margin: '1vw'
    },
    search: {
        position: 'relative',
        borderRadius: 'theme.shape.borderRadius',
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        height: '30px',
        borderRadius: '5px',
        backgroundColor: '#f3f8ff',
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            }
        }
    }
})

class SearchBarAuto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            countries: undefined,
            searchCountries: undefined,
            country: "",
            showSlide: false,
            myRef: React.createRef()
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


    handleOnChange = (event, value) => {
        if (this.state.countries !== undefined) {
            let newSearchCountries = this.state.countries.filter(c => c.name.toLowerCase().includes(value.toLowerCase()));
            this.setState({
                country: value,
                searchCountries: newSearchCountries,
            });
        }
    }
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
            showSlide: true
        })
            ;
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
        const { error, isLoaded, searchCountries, country, countryComplete } = this.state;
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
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                />
                            </div>
                        </Grid>
                        <Grid item className={classes.items}>
                            <ButtonShuffle travel={this.getRandomCountry} />
                        </Grid>
                        <Autocomplete
                            inputProps={{ id: "countries-autocomplete" }}
                            getItemValue={(item) => item.name}
                            items={searchCountries}
                            renderItem={this.hanldeRenderItem}
                            value={country}
                            onChange={this.handleOnChange}
                            onSelect={this.handleOnSelect}
                        />
                        <SlideInfos
                            handleToUpdate={this.handleToUpdate}
                            showSlide={this.state.showSlide}
                            countryName={country}
                        />
                    </Grid>

                </div>
            )
        }
    }
};

export default withStyles(styles)(SearchBarAuto);
