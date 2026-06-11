import React from 'react';
import './Section.css';

function GateScores({ animate }) {
  return (
    <section id="gate" className={`portfolio-section ${animate ? 'reveal' : ''}`}>
      <h2>GATE</h2>
      <div className="gate-scores-grid">
        <div className="gate-score-card">
          <h4>CS (Computer Score) - 2026</h4>
          <p>All India Rank (AIR): 24000</p>
          <p>Score: 369</p>
        </div>
        <div className="gate-score-card highlight-da">
          <h4>DA (Data Science & Artificial Intelligence)</h4>
          <p>All India Rank (AIR): 502</p>
          <p>Score: 617</p>
        </div>
      </div>
    </section>
  );
}

export default GateScores;