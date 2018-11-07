import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";

import Home from './pages/Home'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'

import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <div>
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/page1">Page1</Link>
                </li>
                <li>
                    <Link to="/page2">Page2</Link>
                </li>
                </ul>

                <hr />
                <Switch>
         
                  <Route exact path="/" component={Home} />
                  <Route path="/page1" component={Page1} />
                  <Route path="/page2" component={Page2} />
        
                </Switch>
            </div>
        </header>
      </div>
    );
  }
}

export default App;
