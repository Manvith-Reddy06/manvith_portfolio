import React from 'react';
import './Section.css';

function Certifications({ animate }) {
  return (
    <section
      id="certifications"
      className={`portfolio-section ${animate ? 'reveal' : ''}`}
    >
      <h2>Certifications</h2>
      <ul>
        <li>
          Smart Coder Certificate (DSA) — Smart Interviews
        </li>
        <li>
          Data Structures and Algorithms using Python — NPTEL, IIT Madras (55%)
        </li>
        <li>
          Design and Analysis of Algorithms (Elite) — NPTEL, IIT Madras (60%)
        </li>
        <li>
          Responsible and Safe AI Systems (Elite) — NPTEL, IIT Hyderabad (67%)
        </li>
        <li>
          Machine Learning and Deep Learning — Fundamentals and Applications (Elite) — NPTEL, IIT Guwahati (65%)
        </li>
      </ul>
    </section>
  );
}

export default Certifications;

