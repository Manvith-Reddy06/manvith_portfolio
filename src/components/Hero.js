import React from 'react';
import './Hero.css';

function Hero({ animate }) {
  return (
    <section
      id="hero"
      className={`portfolio-section hero-section ${animate ? 'reveal' : ''}`}
    >
      <div className="hero-content">
        <h1>Manvith</h1>
        <p className="tagline">Aspiring Software Engineer | AI & Machine Learning Enthusiast</p>
        <p>
          A passionate and driven Computer Science student with a strong foundation in AI & Machine Learning,
          web technologies, and problem-solving. Eager to contribute to innovative projects and
          develop impactful solutions.
        </p>
      
      </div>
    </section>
  );
}

export default Hero;