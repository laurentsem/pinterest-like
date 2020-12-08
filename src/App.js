import './assets/css/App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import ProfilePage from './components/ProfilePage';
import test from './components/test';

function App() {
  return (
    <div className="App">
     <Router>
        <Navigation />
     <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/test" component={test} />
     </Switch>
     </Router>
     <Home />
    <Footer />
    </div>
  );
}

export default App;
