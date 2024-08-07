
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../context/CartContext';
import './style.css';

const Header: React.FC = () => {
  const { cartItems } = useCart();

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">My Shop</Link>
      </div>
      <div className="cart-icon">
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="cart-count">{cartItems.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
