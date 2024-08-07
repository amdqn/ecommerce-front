
import { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import { Product } from './data/products';
import Header from './components/Layout/Header';
import CartPage from './pages/Cart/CartPage';

function App() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [showCartPreview, setShowCartPreview] = useState<boolean>(false);

  const handleAddToCart = (product: Product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert('Votre panier est vide.');
      return;
    }
    alert('Commande passée avec succès !');
    setCartItems([]); 
  };

  return (
    <div className="App">
      <Header cartItems={cartItems} onCartHover={setShowCartPreview} />
      <ProductList onAddToCart={handleAddToCart} />
      {showCartPreview && (
        <div className="cart-preview">
          <CartPage cartItems={cartItems} onPlaceOrder={handlePlaceOrder} />
        </div>
      )}
    </div>
  );
}

export default App;
