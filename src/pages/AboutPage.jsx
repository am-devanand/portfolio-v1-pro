import React from 'react';
import PageLayout from '../components/PageLayout';
import WhoIsDEV from '../sections/WhoIsDEV';

const AboutPage = () => {
  return (
    <PageLayout
      label="Who is DEV?"
      title="The engineer behind"
      titleAccent="the code"
      description="Passionate full-stack developer building scalable digital products with clean architecture and modern technologies."
    >
      <WhoIsDEV />
    </PageLayout>
  );
};

export default AboutPage;
