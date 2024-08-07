
import React from 'react';
import { products } from '../data/products';
import ProductItem from './ProductItem';

const ProductList: React.FC = () => {
  return (
    <div>
      <h1>Liste des Produits</h1>
      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
