import React from 'react';
import './Section.css';

function Skills({ animate }) {
  const skills = {
    "Programming Languages": ["Python", "Java", "JavaScript", "SQL"],
    "Web Technologies & Frameworks": ["HTML", "CSS", "React.js", "Next.js", "Node.js", "Express.js", "FastAPI"],
    "Machine Learning & AI": ["Scikit-Learn", "YOLOv8", "OpenCV", "COLMAP"],
    "Databases & Authentication": ["PostgreSQL", "MySQL", "MongoDB", "OAuth"],
    "Developer Tools": ["Git", "GitHub", "Visual Studio Code"]
  };

  return (
    <section id="skills" className={`portfolio-section ${animate ? 'reveal' : ''}`}>
      <h2>Technical Skills</h2>
      <div className="skills-list">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skills-category">
            <h4>{category}</h4>
            <ul>
              {items.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;