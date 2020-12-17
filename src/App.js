import './assets/css/App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import Navigation from './components/Navigation';
import Home from './components/Home';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import ProfilePage from './components/ProfilePage';
import NewPost from './components/NewPost';
import Playlist from './components/Playlist'
import PlaylistDetails from "./components/PlaylistDetails";
import Axios from "axios";


function App() {
    return (
        <body>
        <div className="App">
            <Router>
                <Navigation/>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/profile" component={ProfilePage}/>
                    <Route path="/newPost" component={NewPost}/>
                    <Route path="/playlist" component={Playlist}/>
                    <Route exact path="/playlistDetails/:id" component={PlaylistDetails}/>

                </Switch>
            </Router>
        </div>
        </body>
    );
}

export default App;
