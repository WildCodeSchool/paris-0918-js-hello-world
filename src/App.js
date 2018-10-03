import React, { Component } from 'react';
import './css/App.css';
import WorldMap from './components/WorldMap'
import Header from './components/Header'
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div>
          <WorldMap />
        </div>
      </div>
    );
  }
}

export default App;
