import React from 'react';
import './Section.css';

function Experience({ animate }) {
  return (
    <section
      id="experience"
      className={`portfolio-section ${animate ? 'reveal' : ''}`}
    >
      <h2>Internship Experience</h2>
      <div className="experience-item">
        <h3>Backend Development Intern - Risk Guard Enterprise Solutions India</h3>
        <p className="date">May 2025 – Present</p>
        <ul>
          <li>Developed an emergency platform with GPS tracking and optimized routing, reducing response time by ∼35%.</li>
          <li>Built async FastAPI REST APIs with non-blocking endpoints and background workers, improving throughput by ∼60% and reducing latency by ∼45%.</li>
          <li>Implemented Redis caching for fast retrieval of ambulance coordinates, reducing location lookup latency by ∼70% compared to direct database queries, and designed PostgreSQL schemas and backend workflows for real-time emergency dispatch.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;