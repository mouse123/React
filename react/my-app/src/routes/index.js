import React from 'react'
import { BrowserRouter, HashRouter, IndexRoute, Router, Route, Match, Link, hashHistory, IndexLink } from 'react-router-dom'
import About from '../page/About'
import Home from '../page/Home'
  
class RouteMap extends React.Component {
    render() { 
    return ( 
        <BrowserRouter> 
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </div>   
        </BrowserRouter> 
    ) 
  } 
} 
  
export default RouteMap 