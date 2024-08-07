
import React from 'react';
import { Product } from '../../data/products';
import './style.css';

interface CartPageProps {
  cartItems: Product[];
  onPlaceOrder: () => void;
}

const CartPage: React.FC<CartPageProps> = ({ cartItems, onPlaceOrder }) => {
  return (
    <div className="cart-page">
      <h2>Votre Panier</h2>
      {cartItems.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}€
            </li>
          ))}
        </ul>
      )}
      <button onClick={onPlaceOrder}>Passer la Commande</button>
    </div>
  );
};

export default CartPage;
