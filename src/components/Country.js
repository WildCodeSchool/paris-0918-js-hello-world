import React, { Component } from "react"
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
        if (n != undefined) {
            return n.toString().split('').reverse().map((e, i) => {
                if (i % 3 == 0 && i != 0) {
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
        const { error, isLoaded, country, findCountryName } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div key={country.name}>
                    <h2> {country.name} </h2>
                    <h3>Region:{country.region}</h3>
                    <img src={country.flag} width="400px" alt="Flag"></img>
                    <h3>Capitale :{country.capital}</h3>
                    <h3>Monnaie: {country.currencies.map(currency => currency.name).join(",")}</h3>
                    <h3>Population: {this.formatNumber(country.population)} Inhabitants</h3>
                    <h3>Area: {this.formatNumber(country.area)} km² </h3>
                </div>
            );
        }
    }
}

export default Country
