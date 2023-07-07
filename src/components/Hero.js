import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = ({ image, hoverImage }) => {
  return (
    <div className="hero">
      <Link to="/clothing" className="hero-link">
        <div
          className="hero-image"
          style={{ backgroundImage: `url(${image})` }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundImage = `url(${hoverImage})`)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundImage = `url(${image})`)}
        >
          <div className="hero-text">
            <h1 className="hero-heading">Lorem ipsum dolor sit amet</h1>
            <h2 className="hero-subheading">Consectetur adipiscing elit</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Hero;
