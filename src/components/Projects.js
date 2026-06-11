import React from 'react';
import './Section.css';

function Projects({ animate }) {
  return (
    <section id="projects" className={`portfolio-section ${animate ? 'reveal' : ''}`}>
      <h2>Projects</h2>
      <div className="project-item">
        <h3>3D Semantic Scene Understanding from Monocular Video (Research Project, Published Work)</h3>
        <ul>
          <li>Developed a monocular 3D scene understanding pipeline using YOLOv8 object detection and COLMAP Structure-from-Motion.</li>
          <li>Implemented 2D–3D projection and spatio-semantic memory enabling spatio-semantic object localization from RGB video.</li>
          <li>Achieved &lt;1 px mean reprojection error and 60% semantic reasoning accuracy on real video sequences.</li>
        </ul>
      </div>
      <div className="project-item">
        <h3>Smart Traffic Management System using YOLOv8 (Research Project)</h3>
        <ul>
          <li>Developed an AI-based adaptive traffic signal controller system using YOLOv8 to detect and classify vehicles from real-time traffic video streams.</li>
          <li>Implemented lane-wise traffic signal estimation and emergency vehicle detection to dynamically adjust signal timings and prioritize ambulances and fire trucks.</li>
          <li>Achieved real-time processing of 20–25 FPS with 81.7% precision and 63.4% recall, enabling deployments on edge devices without GPU acceleration.</li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;