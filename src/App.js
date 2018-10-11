import React, { Component } from 'react';
import './css/App.css';
import WorldMap from './components/WorldMap'
import Header from './components/Header'
import Contact from './components/Contact';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Contact />
        <div>
          <WorldMap />
        </div>
      </div>
    );
  }
}

export default App;
