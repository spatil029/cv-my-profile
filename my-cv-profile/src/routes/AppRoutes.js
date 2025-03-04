import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SlidingWrapper from '../components/SlidingWrapper';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const AppRoutes = () => {
  return (
    <SlidingWrapper>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </SlidingWrapper>
  );
};

export default AppRoutes; 