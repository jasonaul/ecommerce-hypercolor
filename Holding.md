  const NavBar = ({ logo }) => (
    <nav className="navbar">
  
      <div className="navbar-right">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTiktok} />
        </a>
      </div>
    </nav>
  );
  
  export default NavBar;