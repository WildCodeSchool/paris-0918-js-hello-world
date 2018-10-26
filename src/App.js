import React, { Component } from 'react';
import './css/App.css';
import WorldMap from './components/WorldMap';
import Header from './components/Header';
import Footer from './components/Footer';
import PartSearch from './components/PartSearch';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PartSearch />
        <div>
          <WorldMap />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
