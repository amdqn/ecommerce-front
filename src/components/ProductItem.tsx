
import React from 'react';
import { Product } from '../data/products';

interface ProductItemProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onAddToCart }) => {
  return (
    <li>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Prix: {product.price}€</p>
      <button onClick={() => onAddToCart(product)}>Ajouter au Panier</button>
    </li>
  );
};

export default ProductItem;
