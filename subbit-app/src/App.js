import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome.js';
import StopsBlock from './components/StopsBlock.jsx'

class App extends React.Component {
  render () {
    return (


        <div>
        <div className="App">
          <header className="App-header">
            <h1> Welcome to Subbit! </h1>
          </header>
        </div>
        <div className="text-center" style={{backgroundColor: "#f0f8ff"}}>
          <StopsBlock />
        </div>
        </div>
    );
  }
}

export default App;
