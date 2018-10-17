import React, { Component } from "react";
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        flexGrow: "1",
        fontSize: '1.1em',
        color: '#315681',
        padding: '6%',
        
    },
    imgFlag: {
        width: '85%'
    },
    titleName: {
        textAlign: 'center',
        fontSize: '1.3em'
    },
    titleInfos: {
        fontWeight:'500'
    },
    text: {
        textAlign:"center"
    }

});

class Country extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            country: undefined,
            findCountryName: props.countryName
        };
    }
    formatNumber = (n) => {
        if (n) {
            return n.toString().split('').reverse().map((e, i) => {
                if (i % 3 === 0 && i !== 0) {
                    e = e + ",";
                }
                return e;
            }
            ).reverse().join('')
        }
        else {
            return "";
        }
    }


    componentDidMount() {
        let url = "https://restcountries.eu/rest/v2/name/" + this.state.findCountryName;
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        country: result[0]
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
        const { classes } = this.props;
        const { error, isLoaded, country, findCountryName } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (

                <div key={country.name} className={classes.root}>
                    <Grid className={classes.titleName}
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={16}
                    >
                        <Grid item xs={5} >
                            <p> {country.name}</p>
                        </Grid>
                        <Grid item xs={2}>
                        </Grid>
                        <Grid item xs={5}>
                            <img className={classes.imgFlag} src={country.flag} alt="Flag"></img>
                        </Grid>
                    </Grid>
                    <Grid className={classes.text}
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item xs={12}>
                            <p><span className={classes.titleInfos}>Continent ▻</span> {country.region}</p>
                        </Grid>
                        <Grid item xs={12}>
                            <p><span className={classes.titleInfos}>Capital ▻</span>  {country.capital}</p>
                        </Grid>
                        <Grid item xs={12}>
                            <p><span className={classes.titleInfos}>Currency ▻</span>  {country.currencies.map(currency => currency.name).join(",")}</p>
                        </Grid>
                        <Grid item xs={12}>
                            <p><span className={classes.titleInfos}>Population ▻</span>  {this.formatNumber(country.population)}</p>
                        </Grid>
                        <Grid item xs={12}>
                            <p><span className={classes.titleInfos}>Area ▻</span>  {this.formatNumber(country.area)} km² </p>
                        </Grid>
                    </Grid>
                </div>

            );
        }
    }
}

export default withStyles(styles)(Country);
