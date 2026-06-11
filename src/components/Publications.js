import React from 'react';
import './Section.css';

function Publications({ animate }) {
  return (
    <section
      id="publications"
      className={`portfolio-section ${animate ? 'reveal' : ''}`}
    >
      <h2>Publications</h2>
      <div className="publication-item">
        <h3>3D Semantic Scene Understanding from Monocular Video</h3>
        <p>Accepted for presentation at 4th International Conference on Power Engineering and Intelligent Systems (PEIS 2026), to appear in Springer Lecture Notes in Electrical Engineering (LNEE), Scopus-indexed.</p>
        <ul>
          <li>Developed a monocular 3D scene understanding framework integrating YOLOv8 object detection with COLMAP Structure-from-Motion to localize objects in reconstructed 3D space from RGB video.</li>
          <li>Implemented a 2D–3D projection and spatio-semantic memory system, achieving &lt;1 px mean reprojection error and stable multi-frame object localization.</li>
          <li>Evaluated on real video sequences achieving 60% semantic reasoning accuracy with low temporal drift while maintaining geometrically consistent reconstruction.</li>
        </ul>
      </div>
    </section>
  );
}

export default Publications;