import './App.css';
import NavBar from './components/NavBAr/NavBar';
import "@popperjs/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Cart } from './components/Cart/Cart';
import {CartProvider} from './context/CartProvider';



function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element= {<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element= {<ItemListContainer/>}/>
        <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
        <Route path="/cart/" element={<Cart/>}/>
      </Routes>
      

      
      
      </BrowserRouter>
      </CartProvider>
      <footer>
        Footer
      </footer>
    </div>
  );
}

export default App;
