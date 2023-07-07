import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const MyCarousel = ({ images }) => (
  <Carousel>
    {images.map((img, index) => (
      <div key={index}>
        <img src={img} />
      </div>
    ))}
  </Carousel>
);

export default MyCarousel;
