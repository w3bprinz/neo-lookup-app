import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import NeoLookUp from './components/neolookup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NeoLookUp/>
      </div>
    );
  }
}

export default App;
