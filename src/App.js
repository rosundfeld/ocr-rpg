import React from 'react';
import GetInfo from './Components/getInfo'
import Navbar from './Components/NavBar/navbar'

import './App.css';

export default function App() {
  return (
    <div className="App">
      <Navbar className="navigation" />
      <GetInfo />
    </div>
  );
}
