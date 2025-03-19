import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { ProductContextProvider } from './contexts/ProductContext';
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';
import { CarttContextProvider } from './contexts/CartContext';

function App() {
  return (
    <CarttContextProvider>
      <ProductContextProvider>
        <div className="App">
          <Navigation />
          <main className="content">
            <Route exact path="/">
              <Products />
            </Route>
            <Route path="/cart">
              <ShoppingCart />
            </Route>
          </main>
        </div>
      </ProductContextProvider>
    </CarttContextProvider>
  );
}

export default App;
