
import { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import { Product } from './data/products';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert('Votre panier est vide.');
      return;
    }

    // Logique pour passer la commande
    alert('Commande passée avec succès !');
    setCartItems([]); // Vider le panier après la commande
  };
  return (
    <div className="App">
      <h1>Bienvenue sur notre Boutique</h1>
      <ProductList onAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} onPlaceOrder={handlePlaceOrder} />
    </div>
  );
}

export default App;
