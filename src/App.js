import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBAr/NavBar';
import Parent from './components/Parent/Parent';
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core";
import Counter from './components/Counter/Counter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <ItemListContainer greeting="Holi"/>
        <button className="btn btn-primary">Botonceto</button>
        <img src={logo} className="App-logo" alt="logo" />
        <Parent>
          <div>Estoy dentro del Parent en APP</div>
        </Parent>
        <Counter/>
        <FontAwesomeIcon icon={faCoffee}/>
      </header>
      
    </div>
  );
}

export default App;
