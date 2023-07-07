import React from 'react';
import './ImageBreak.css';

const ImageBreak = ({ images }) => {
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <div className="image-break" style={{ backgroundImage: `url(${randomImage})` }}>
    </div>
  );
};

export default ImageBreak;
