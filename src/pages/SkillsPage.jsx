import React from 'react';
import PageLayout from '../components/PageLayout';
import TechStack from '../sections/TechStack';

const SkillsPage = () => {
  return (
    <PageLayout
      label="Technical Skills"
      title="Tools & technologies"
      titleAccent="I use"
      description="A curated set of modern technologies I use to design, build and ship production-ready software."
    >
      <TechStack />
    </PageLayout>
  );
};

export default SkillsPage;
