import React, { useState } from 'react';
import { useEffect } from 'react';

import './navbar.css';

export default function GetInfo() {

  return (
    <div>
      <ul className="navUl">
          <li><a>Home</a></li>
          <li><a>Fichas</a></li>
          <li><a>Campanhas</a></li>
      </ul>
    </div>
  );
}
