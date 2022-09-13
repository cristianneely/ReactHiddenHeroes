import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBAr/NavBar';
import Parent from './components/Parent/Parent';
import "bootstrap/dist/css/bootstrap.css";
import "@popperjs/core";
import Counter from './components/Counter/Counter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <ItemDetailContainer itemId={2}/>
        <ItemListContainer greeting="Holi"/>
        <Counter/>
      </header>
      
    </div>
  );
}

export default App;
