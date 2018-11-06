import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './pages/Home'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Router>
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

                <Route exact path="/" component={Home} />
                <Route path="/page1" component={Page1} />
                <Route path="/page2" component={Page2} />
            </div>
        </Router>
        </header>
      </div>
    );
  }
}

export default App;
