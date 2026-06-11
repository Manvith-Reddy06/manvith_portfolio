import React from 'react';
import './Section.css';

function Achievements({ animate }) {
  return (
    <>
    <section
      id="achievements"
      className={`portfolio-section ${animate ? 'reveal' : ''}`}
    >
      <h2>Achievements</h2>
      <ul>
        <li>
          Qualified TCS CodeVita 2025: Secured a Zonal Rank of 19,836 among 300,000+ participants
        </li>
        <li>
          Qualified SITH Internal Hackathon (Institute Round): Advanced from 250+ teams to top 25 teams in the internal selection process
        </li>
        <li>
          Hackathons: Krithonh2.0 (AntiDepression Web App), HackInfinity (AI Food Label Reader), DEMUX Hackathon (VibeHub — GitHub for Video Coders), Smart India Hackathon (SafeByte)
        </li>
      </ul>
    </section>
    <section
      id="gate"
      className={`portfolio-section ${animate ? 'reveal' : ''}`}
    >
      <h2>GATE </h2>
      <ul>
        <li>
          Secured <span ><b>All India Rank- 502</b></span> with 671 Score in GATE Data Science and Artificial Intelligence
        </li>
        <li>
          Secured <span ><b>All India Rank- 24,296</b></span> with 369 Score in GATE Computer Science 
        </li>
        
      </ul>
    </section>
    </>
  );
}

export default Achievements;

