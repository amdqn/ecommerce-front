
export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
  }
  
  export const products: Product[] = [
    { id: 1, name: 'Laptop', price: 999, description: 'A high-performance laptop.' },
    { id: 2, name: 'Smartphone', price: 699, description: 'A powerful smartphone with a great camera.' },
    { id: 3, name: 'Headphones', price: 199, description: 'Noise-cancelling over-ear headphones.' },
    { id: 4, name: 'Smartwatch', price: 299, description: 'A smartwatch with various health-tracking features.' },
  ];
  