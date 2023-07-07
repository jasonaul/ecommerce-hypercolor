import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products/featured') // Replace with your actual API endpoint
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default FeaturedProducts;
