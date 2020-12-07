import './assets/css/App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <h1>Pinterest</h1>
        <span>create'n share</span>
      </header>
        <button type="button" className="btn btn-outline-danger">connection</button>
      <Footer/>
    </div>
  );
}

export default App;
