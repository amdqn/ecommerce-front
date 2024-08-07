
import React from 'react';
import { useCart } from '../../context/CartContext';

import ProductList from '../../components/ProductList';
import Header from '../../components/Layout/Header';
import { Product } from '../../data/products';

import './style.css';

const HomePage: React.FC = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <div className="Home">
      <Header />
      <ProductList onAddToCart={handleAddToCart} />
    </div>
  );
};

export default HomePage;
