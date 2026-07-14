import React from 'react';
import Navbar from './components/Navbar';
import SpotlightBackground from './components/ui/SpotlightBackground';
import Hero from './sections/Hero';
import WhoIsDEV from './sections/WhoIsDEV';
import Services from './sections/Services';
import SelectedWork from './sections/SelectedWork';
import Philosophy from './sections/Philosophy';
import TechStack from './sections/TechStack';
import Timeline from './sections/Timeline';
import Highlights from './sections/Highlights';
import GitHubShowcase from './sections/GitHubShowcase';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen text-text-primary overflow-hidden">
      <SpotlightBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <WhoIsDEV />
        <Services />
        <SelectedWork />
        <Philosophy />
        <TechStack />
        <Timeline />
        <Highlights />
        <GitHubShowcase />
        <Contact />
      </main>
    </div>
  );
}

export default App;
