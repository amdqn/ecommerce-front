
import React from 'react';
import { Product, products } from '../data/products';
import ProductItem from './ProductItem';

interface ProductListProps {
    onAddToCart: (product: Product) => void;
  }

  const ProductList: React.FC<ProductListProps> = ({ onAddToCart }) => {
  return (
    <div>
      <h1>Liste des Produits</h1>
      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
