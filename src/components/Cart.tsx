
import React from 'react';
import { Product } from '../data/products';

interface CartProps {
  cartItems: Product[];
  onPlaceOrder: () => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, onPlaceOrder }) => {
  return (
    <div>
      <h2>Panier</h2>
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

export default Cart;
