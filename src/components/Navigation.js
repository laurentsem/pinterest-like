// Navigation
// Menu horizontal fixe + logo à ajouter

import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/nav.css';


import * as route from '../constants/index';

const Navigation = () => (
<div id="indicator">
  <nav class="page__menu menu">
    <ul class="menu__list r-list">
      <li class="menu__group">
        <a class="menu__link r-link text-underlined">
          <Link to={route.homepage}>Accueil</Link>
        </a>
      </li>
      <li class="menu__group">
        <a class="menu__link r-link text-underlined">
        <Link to={route.login}>Login</Link>
        </a>
      </li>
      <li class="menu__group">
        <a class="menu__link r-link text-underlined">
        <Link to={route.signup}>S'inscrire</Link>
        </a>
      </li>
      <li class="menu__group">
        <a class="menu__link r-link text-underlined"><Link to={route.profile}>Profile</Link>
        </a>
      </li>
      <li class="menu__group">
        <a class="menu__link r-link text-underlined"><Link to={route.newPost}>Publier</Link>
        </a>
      </li>
    </ul>
  </nav>
</div>
);

export default Navigation;
