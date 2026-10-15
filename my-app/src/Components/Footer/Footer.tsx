import { FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        <span>©2022 Blogger</span>
        <span>All rights reserved</span>
      </div>

      <div className="footer__socials">
        <FiInstagram />
        <FiFacebook />
        <FiYoutube />
      </div>
    </footer>
  );
}