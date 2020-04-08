import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome.js';
import StopBlock from './components/StopBlock.js'

class App extends React.Component {
  render () {
    return (


      
        <div className="App">
          <header className="App-header">
            <h1> Hello this is the header </h1>
          </header>
          <Welcome name="Nando"/>
          
        </div>
    );
  }
}

export default App;
