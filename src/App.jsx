import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage     from './pages/HomePage';
import AboutPage    from './pages/AboutPage';
import SkillsPage   from './pages/SkillsPage';
import WorkPage     from './pages/WorkPage';
import ServicesPage from './pages/ServicesPage';
import JourneyPage  from './pages/JourneyPage';
import ContactPage  from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"         element={<HomePage />}     />
        <Route path="/about"    element={<AboutPage />}    />
        <Route path="/skills"   element={<SkillsPage />}   />
        <Route path="/work"     element={<WorkPage />}     />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/journey"  element={<JourneyPage />}  />
        <Route path="/contact"  element={<ContactPage />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
