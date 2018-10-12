import React, { Component } from 'react';
import './css/App.css';
import WorldMap from './components/WorldMap'
import Header from './components/Header'
import SearchBarAuto from "./components/SearchBarAuto"
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <SearchBarAuto/>
        <div>
          <WorldMap />
        </div>
      </div>
    );
  }
}

export default App;
