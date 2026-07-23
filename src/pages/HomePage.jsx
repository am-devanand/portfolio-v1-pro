import React from 'react';
import Navbar from '../components/Navbar';
import SpotlightBackground from '../components/ui/SpotlightBackground';
import Hero from '../sections/Hero';

const HomePage = () => {
  return (
    <div className="relative min-h-screen text-text-primary overflow-hidden">
      <SpotlightBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
      </main>
    </div>
  );
};

export default HomePage;
