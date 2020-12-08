// Navigation
// Menu horizontal fixe + logo à ajouter

import React from 'react';
import { Link } from 'react-router-dom';

import * as route from '../constants/index';

const Navigation = () => (
<div>
  <nav>
    <ul>
      <li>
        <Link to={route.homepage}>Accueil</Link>
      </li>
      <li>
        <Link to={route.signup}>Inscription</Link>
      </li>
      <li>
        <Link to={route.login}>Login</Link>
      </li>
      <li>
        <Link to={route.profile}>Profile</Link>
      </li>
      <li>
        <Link to={route.test}>Test</Link>
      </li>
    </ul>
  </nav>
</div>
);

export default Navigation;
