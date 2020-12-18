import './assets/css/App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import Navigation from './components/Navigation';
import Home from './components/Home';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import ProfilePage from './components/ProfilePage';
import NewPost from './components/NewPost';
import TagDetails from "./components/TagDetails";


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
                    <Route exact path="/tag/:tag" component={TagDetails}/>
                </Switch>
            </Router>
            <Footer/>
        </div>
        </body>
    );
}

export default App;
