import React from 'react';
import Navbar from './components/Navbar';
import SpotlightBackground from './components/ui/SpotlightBackground';
import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen text-text-primary overflow-hidden">
      <SpotlightBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Services />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
