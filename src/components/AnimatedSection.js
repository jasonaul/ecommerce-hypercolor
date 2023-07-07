import React from 'react';
import { Link } from 'react-router-dom';
import './AnimatedSection.css';

const AnimatedSection = ({ gifBackground }) => {
  return (
    <div className="animated-section" style={{ backgroundImage: `url(${gifBackground})` }}>
      <div className="animated-text">Face masks for every smile.</div>
      <Link to="/apparel" className="animated-button">See our Apparel</Link>
    </div>
  );
};

export default AnimatedSection;
