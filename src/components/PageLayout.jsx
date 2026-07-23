import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PageHero from './PageHero';
import SpotlightBackground from './ui/SpotlightBackground';

const PageLayout = ({ label, title, titleAccent, description, children }) => {
  return (
    <div className="relative min-h-screen text-text-primary overflow-hidden">
      <SpotlightBackground />
      <Navbar />

      <main className="relative z-10">
        <PageHero
          label={label}
          title={title}
          titleAccent={titleAccent}
          description={description}
        />
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default PageLayout;
