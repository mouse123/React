import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter, Router, Route, Match, Link, hashHistory, IndexLink } from 'react-router-dom'
// import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import RouteMap from './routes/index.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <RouteMap></RouteMap>
), document.getElementById('root'))

registerServiceWorker();
