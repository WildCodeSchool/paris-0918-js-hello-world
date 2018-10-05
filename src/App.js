import React, { Component } from 'react';
import './css/App.css';
import WorldMap from './components/WorldMap'
import Header from './components/Header'
import Search from './components/Search';
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Search/>
        <WorldMap />
        
      </div>
    );
  }
}

export default App;
