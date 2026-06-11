import React, { useCallback, useMemo } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import FlowchartNav from './components/FlowchartNav';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Publications from './components/Publications';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import GateScores from './components/GateScores';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; // Global app styles

const routeBySectionId = {
  hero: '/about',
  education: '/education',
  skills: '/skills',
  publications: '/publications',
  experience: '/experience',
  projects: '/projects',
  certifications: '/certifications',
  achievements: '/achievements',
  gate: '/gate',
  contact: '/contact',
};

const labelBySectionId = {
  hero: 'ABOUT',
  education: 'EDUCATION',
  skills: 'SKILLS',
  publications: 'PUBLICATIONS',
  experience: 'EXPERIENCE',
  projects: 'PROJECTS',
  certifications: 'CERTIFICATIONS',
  achievements: 'ACHIEVEMENTS',
  gate: 'GATE',
  contact: 'CONTACT',
};

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const activeSection = useMemo(() => {
    const found = Object.entries(routeBySectionId).find(
      ([, path]) => path === location.pathname
    );
    return found?.[0] ?? 'hero';
  }, [location.pathname]);

  const pageLabel = labelBySectionId[activeSection] ?? 'PORTFOLIO';
  const pageKey = location.pathname;

  const handleNavigate = useCallback(
    (sectionId) => {
      const to = routeBySectionId[sectionId];
      if (!to) return;
      navigate(to);
    },
    [navigate]
  );

  return (
    <div className="app-shell">
      <Header />
      <div className="app-body">
        <aside className="left-panel">
          <FlowchartNav activeSection={activeSection} onNavigate={handleNavigate} />
        </aside>
        <main className="right-panel portfolio-single">
          <div className="page-badge" aria-hidden="true">
            {pageLabel}
          </div>

          <Routes>
            <Route path="/" element={<Navigate to="/about" replace />} />
            <Route path="/about" element={<Hero key={pageKey} animate />} />
            <Route path="/education" element={<Education key={pageKey} animate />} />
            <Route path="/skills" element={<Skills key={pageKey} animate />} />
            <Route path="/publications" element={<Publications key={pageKey} animate />} />
            <Route path="/experience" element={<Experience key={pageKey} animate />} />
            <Route path="/projects" element={<Projects key={pageKey} animate />} />
            <Route
              path="/certifications"
              element={<Certifications key={pageKey} animate />}
            />
            <Route
              path="/achievements"
              element={<Achievements key={pageKey} animate />}
            />
            <Route path="/gate" element={<GateScores key={pageKey} animate />} />
            <Route path="/contact" element={<Contact key={pageKey} animate />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
