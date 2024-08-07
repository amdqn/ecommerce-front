
import React from 'react';
import { useCart } from '../../context/CartContext';
import './style.css';
import { Product } from '../../data/products';

const CartPage: React.FC = () => {
  const { cartItems, clearCart } = useCart();

  const totalCost = cartItems.reduce((total, item) => total + item.price, 0);

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert('Votre panier est vide.');
      return;
    }
    alert('Commande passée avec succès !');
    clearCart(); 
  };

  const getItemQuantity = (item: Product) => {
    return cartItems.filter(cartItem => cartItem.id === item.id).length;
  };

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Votre panier et vide.</p>
      ) : (
        <ul>
          {Array.from(new Set(cartItems.map(item => item.id))).map(id => {
            const item = cartItems.find(item => item.id === id)!;
            const quantity = getItemQuantity(item);

            return (
              <li key={id}>
                {item.name} - {item.price.toFixed(2)} € x {quantity} = {(item.price * quantity).toFixed(2)} €
              </li>
            );
          })}
        </ul>
      )}
      <div className="cart-summary">
        <h2>Total: {totalCost.toFixed(2)} €</h2>
      </div>
      <button onClick={handlePlaceOrder}>Passer la commande</button>
    </div>
  );
};

export default CartPage;
