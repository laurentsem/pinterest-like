// Navigation
// Menu horizontal du haut à rester fixe + logo à ajouter

import React from 'react';
import { Link } from 'react-router-dom';

import * as route from '../assets/constants/routes';

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
    </ul>
  </nav>
</div>
);
 
export default Navigation;