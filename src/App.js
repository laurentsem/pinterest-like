import './assets/css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <h1>Pinterest</h1>
        <span>create'n share</span>
      </header>
        <button type="button" className="btn btn-outline-danger">Connection</button>
      <Footer/>
    </div>
  );
}

export default App;
