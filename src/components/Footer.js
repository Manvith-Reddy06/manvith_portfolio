import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Manvith. All rights reserved.</p>
      <div className="footer-links" aria-label="Social links">
        <a href="https://www.linkedin.com/in/bijjam-manvith-reddy-530144293/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/Manvith-Reddy06" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="mailto:manvithreddy2021@gmail.com">Gmail</a>
        <a href="tel:+919010631532">Phone</a>
      </div>
    </footer>
  );
}

export default Footer;