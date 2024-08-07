
import React from 'react';
import { Product } from '../data/products';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <li>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Prix: {product.price}€</p>
    </li>
  );
};

export default ProductItem;
