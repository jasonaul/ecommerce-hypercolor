import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => (
  <nav className="navbar">
    <div className="navbar-section">
      <Link to="/" className="logo">HYPER COLOR</Link>
    </div>
    <div className="navbar-section">
      <Link to="/clothing">Clothing</Link>
      <Link to="/apparel">Apparel</Link>
      <Link to="/accessories">Accessories</Link>
      <Link to="/inside">Inside Hyper Color</Link>
    </div>
    <div className="navbar-section">
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
      <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
      <a href="https://www.tiktok.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTiktok} /></a>
      <a href="/cart"><FontAwesomeIcon icon={faShoppingCart} />
</a>
    </div>
  </nav>
);

export default NavBar;
