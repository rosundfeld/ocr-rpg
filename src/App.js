import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Home from './Views/Home/Home'
import Fichas from './Views/Fichas/Fichas'
import Campanhas from './Views/Campanhas/Campanhas'

import { FaHome, FaScroll, FaBook } from 'react-icons/fa';

import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <ul className="navUl">
            <li><Link to="/"><FaHome style={{marginRight: "2%"}}/>Home</Link></li>
            <li><Link to="/fichas"><FaScroll style={{marginRight: "2%"}}/>Fichas</Link></li>
            <li><Link to="/campanhas"><FaBook style={{marginRight: "2%"}}/>Campanhas</Link></li>
        </ul>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/fichas" component={Fichas} />
            <Route exact path="/campanhas" component={Campanhas} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
