import React, { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./navbar.css";

export default function GetInfo() {
  return (
    <div>
      <Router>
        <ul className="navUl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/fichas">Fichas</Link>
          </li>
          <li>
            <Link to="/campanhas">Campanhas</Link>
          </li>
        </ul>
      </Router>
    </div>
  );
}
