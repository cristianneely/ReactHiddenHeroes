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
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element= {<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element= {<ItemListContainer/>}/>
        <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>

      
      <footer>
        Footer
      </footer>
    </div>
  );
}

export default App;
