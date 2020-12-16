// Navigation
// Menu horizontal fixe + logo à ajouter

import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/nav.css';

import * as route from '../constants/index';

const Navigation = () => (
<div id="indicator">
  <nav className="page__menu menu">
    <ul className="menu__list r-list">
      <li className="menu__group">
        <a className="menu__link r-link text-underlined">
          <Link to={route.homepage}>Accueil</Link>
        </a>
      </li>
      <li className="menu__group">
        <a className="menu__link r-link text-underlined">
        <Link to={route.login}>Login</Link>
        </a>
      </li>
      <li className="menu__group">
        <a className="menu__link r-link text-underlined">
        <Link to={route.signup}>S'inscrire</Link>
        </a>
      </li>
      <li className="menu__group">
        <a className="menu__link r-link text-underlined"><Link to={route.profile}>Profile</Link>
        </a>
      </li>
      <li className="menu__group">
        <a className="menu__link r-link text-underlined"><Link to={route.newPost}>Publier</Link>
        </a>
      </li>
    </ul>
  </nav>
</div>
);

export default Navigation;
