import React from 'react';
import PageLayout from '../components/PageLayout';
import Services from '../sections/Services';
import Philosophy from '../sections/Philosophy';
import Highlights from '../sections/Highlights';

const ServicesPage = () => {
  return (
    <PageLayout
      label="What I Build"
      title="Services &"
      titleAccent="approach"
      description="From portfolio sites to full-stack applications — available for freelance work and real-world development projects."
    >
      <Services />
      <Philosophy />
      <Highlights />
    </PageLayout>
  );
};

export default ServicesPage;
