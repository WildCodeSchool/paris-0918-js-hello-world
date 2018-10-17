import React, { Component } from 'react';
import './css/App.css';
import WorldMap from './components/WorldMap'
import Header from './components/Header'
import SearchBarAuto from "./components/SearchBarAuto";
import Footer from "./components/Footer"
import SearchCountry from "./components/SearchCountry";



class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <SearchBarAuto/>
        <div>
          <SearchCountry/>
          <WorldMap />
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
