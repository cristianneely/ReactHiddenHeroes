import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core";


function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <button className="btn btn-primary">Botonceto</button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
