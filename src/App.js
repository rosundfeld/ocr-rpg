import React from 'react';
import GetInfo from './Components/getInfo'
import Navbar from './Components/NavBar/navbar'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Home from './Views/Home/Home'
import Fichas from './Views/Fichas/Fichas'
import Campanhas from './Views/Campanhas/Campanhas'

import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <ul className="navUl">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/fichas">Fichas</Link></li>
            <li><Link to="/campanhas">Campanhas</Link></li>
        </ul>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/fichas" component={Fichas} />
            <Route exact path="/campanhas" component={Campanhas} />
          </Switch>
        </div>
        <GetInfo />
      </div>
    </Router>
  );
}
