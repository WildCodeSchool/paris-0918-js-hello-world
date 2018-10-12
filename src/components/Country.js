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
                        <img src = {country.flag} width="400px" alt="Flag"></img> 
                        <h3>Capitale :{country.capital}</h3>
                        <h3>Monnaie: {country.currencies.map(currency => currency.code).join(",")}</h3>
                        <h3>Population: {country.population} habitants</h3> 
                        <h3>Supercifie:{country.area}km² </h3> 
                    </div>
            );
        }
    }
}

export default Country
