import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

//Views
import Home from './Views/Home/Home'
import Fichas from './Views/Fichas/Fichas'
import Campanhas from './Views/Campanhas/Campanhas'

//icones
import { FaHome, FaScroll, FaBook, FaUser } from 'react-icons/fa';

//css
import './App.css';

//materialUi
import { Tooltip } from '@material-ui/core';

export default function App() {
  return (
    <Router>
      <div className="App">
        <ul className="navUl">
            <li> <Link to="/"><FaHome style={{marginRight: "2%"}}/></Link> </li>
            <li><Link to="/fichas"><FaScroll style={{marginRight: "2%"}}/>Fichas</Link></li>
            <li><Link to="/campanhas"><FaBook style={{marginRight: "2%"}}/>Campanhas</Link></li>
            <li><Link to="/login"><FaUser/></Link></li>
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
