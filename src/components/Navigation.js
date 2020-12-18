// Navigation
// Menu horizontal fixe + logo à ajouter

import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/nav.css';

import * as route from '../constants/index';
import firebase from "firebase";


class Navigation extends Component {

  constructor(props) {
    super(props);

    this.initialState = {
      isLogin: false
    };

    this.state = this.initialState;
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        this.setState(() => ({
          isLogin: true
        }));
      } else {
        console.log("users not logged");
      }
    })
  };

  componentWillUnmount = () => {
    this.setState(() => (this.initialState));
  };

  Logout = () => {
    firebase.auth().signOut().then(() => {
      this.setState(() => (this.initialState));
    }).catch(function (err) {
      console.log(err.message)
    })
  };

  render() {
    return (
        <div id="indicator">
          <nav className="page__menu menu">
            <ul className="menu__list r-list">
              <li className="menu__group">
                <a className="menu__link r-link text-underlined">
                  <Link to={route.homepage}>Accueil</Link>
                </a>
              </li>
              {this.state.isLogin === false ?
                  <>
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
                  </>
                  :
                  <>
                    <li className="menu__group">
                      <a className="menu__link r-link text-underlined"><Link to={route.newPost}>Publier</Link>
                      </a>
                    </li>
                    <li className="menu__group">
                      <a className="menu__link r-link text-underlined"><Link to={route.playlist}>Mes Tableaux</Link>
                      </a>
                    </li>
                    <li className="menu__group">
                      <a className="menu__link r-link text-underlined"><Link to={route.profile}>Mon Profil</Link>
                      </a>
                    </li>
                    <li className="menu__group">
                      <a className="menu__link r-link text-underlined">
                        <Link onClick={this.Logout}>Logout</Link>
                      </a>
                    </li>
                  </>
              }
            </ul>
          </nav>
        </div>

    )
  }
}

export default Navigation;
