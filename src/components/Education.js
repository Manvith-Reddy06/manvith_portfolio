import React from 'react';
import './Section.css'; // Reusing a generic section style

function Education({ animate }) {
  return (
    <section
      id="education"
      className={`portfolio-section ${animate ? 'reveal' : ''}`}
    >
      <h2>Education</h2>
      <div className="education-item">
        <h3>B.V. Raju Institute of Technology</h3>
        <p>Narsapur, Telangana</p>
        <p>Bachelor of Science in Computer Science (AI & Machine Learning) – 9.1 CGPA</p>
        <p className="date">Aug. 2023 – May 2027</p>
      </div>
      <div className="education-item">
        <h3>Sri Chaitanya Junior Kalasala</h3>
        <p>Hyderabad, Telangana</p>
        <p>Intermediate (MPC) – 96%</p>
        <p className="date">May 2023</p>
      </div>
      <div className="education-item">
        <h3>Akshara The Techno School</h3>
        <p>Hyderabad, Telangana</p>
        <p>Secondary School Certificate – GPA: 10.0/10.0</p>
        <p className="date">May 2021</p>
      </div>
    </section>
  );
}

export default Education;