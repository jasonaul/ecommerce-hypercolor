import React from 'react';

const Product = ({ product }) => (
  <div>
    <h2>{product.title}</h2>
    <img src={product.image} alt={product.title} />
    <p>{product.description}</p>
    <p>${product.price}</p>
    <button>Add to Cart</button>
  </div>
);

export default Product;
