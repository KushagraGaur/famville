import { faFacebookF, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} FamVille. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.facebook.com/thefamville#"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="https://www.instagram.com/thefamville/"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="tel:+919953232388"><FontAwesomeIcon icon={faPhone} /></a>

          
    
        </div>
      </div>
    </footer>
  );
};

export default Footer;