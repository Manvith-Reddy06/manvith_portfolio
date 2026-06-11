import React from 'react';
import './Section.css';
import './Contact.css';

function Contact({ animate }) {
  return (
    <section
      id="contact"
      className={`portfolio-section ${animate ? 'reveal' : ''}`}
    >
      <h2>Contact Me</h2>
      <p>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" />
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/bijjam-manvith-reddy-530144293/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a href="https://github.com/Manvith-Reddy06" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="mailto:manvithreddy2021@gmail.com">manvithreddy2021@gmail.com</a>
        <a href="tel:+919010631532">+91 9010631532</a>
      </div>
    </section>
  );
}

export default Contact;