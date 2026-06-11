import React, { useMemo, useState } from 'react';
import './FlowchartNav.css';

function FlowchartNav({ activeSection, onNavigate }) {
  const nodes = useMemo(
    () => [
      { id: 'hero', label: 'About' },
      { id: 'education', label: 'Education' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'certifications', label: 'Certs' },
      { id: 'achievements', label: 'Awards' },
      { id: 'publications', label: 'Pubs' },
      { id: 'experience', label: 'Work' },
      { id: 'contact', label: 'Contact' },
    ],
    []
  );

  // Center circle should be your picture.
  // Put your image in `public/profile.jpg`. Until then, it falls back to `logo512.png`.
  const fallbackSrc = '/logo512.png';
  const [centerSrc, setCenterSrc] = useState('/profile.jpg');

  const handleCenterImageError = () => {
    setCenterSrc(fallbackSrc);
  };

  const radius = 140;
  const ringCount = nodes.length;

  return (
    <div className="flowchartWrap" aria-label="Portfolio navigation flowchart">
      <div className="flowchart">
        <button
          type="button"
          className={`flow-centerBtn ${activeSection === 'gate' ? 'is-active' : ''}`}
          onClick={() => onNavigate?.('gate')}
          aria-label="Go to GATE"
        >
          <div className="flow-centerImage">
            <img src={centerSrc} alt="Profile" onError={handleCenterImageError} />
          </div>
        </button>

        {nodes.map((node, index) => {
          const angle = (Math.PI * 2 * index) / ringCount - Math.PI / 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <button
              // eslint-disable-next-line react/no-array-index-key
              key={`${node.id}-${index}`}
              type="button"
              className={`flow-nodeBtn ${activeSection === node.id ? 'is-active' : ''}`}
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
              }}
              onClick={() => onNavigate?.(node.id)}
              aria-label={`Go to ${node.label}`}
            >
              {node.label}
            </button>
          );
        })}

        <div className="flow-dots" aria-hidden="true" />
      </div>
    </div>
  );
}

export default FlowchartNav;

