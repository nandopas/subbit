import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/counter.jsx';
import Counters from './components/counters.jsx';
import StopBlock from './components/StopBlock.jsx'; 
import StopsBlock from './components/StopsBlock.jsx';
import Nav from './components/Nav.jsx';

/*
ReactDOM.render(<Nav />, document.getElementById('nav'));
ReactDOM.render(<App />, document.getElementById('root'));
*/
//ReactDOM.render(<StopsBlock />, document.getElementById('stops'));


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
