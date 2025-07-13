import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(
        (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || 
        currentScrollPos < 10
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <nav className={`navbar ${visible ? 'visible' : 'hidden'}`}>
      <div className="container">
        <div className="logo-container">
          <a href="#">
            <img src="/sitelogo.png" alt="FamVille Logo" className="logo-image" />
          </a>
        </div>

        <div className="slogan">
          <span>Come as Guests, Stay as Family.</span>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
    
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>

        <button 
          className="hamburger" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;