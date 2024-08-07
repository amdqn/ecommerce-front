
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import { Product } from '../../data/products';

interface HeaderProps {
  cartItems: Product[];
  onCartHover: (show: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ cartItems, onCartHover }) => {
  return (
    <header className="header">
      <div className="logo">My Shop</div>
      <div
        className="cart-icon"
        onMouseEnter={() => onCartHover(true)}
        onMouseLeave={() => onCartHover(false)}
      >
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="cart-count">{cartItems.length}</span>
      </div>
    </header>
  );
};

export default Header;
