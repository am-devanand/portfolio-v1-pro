import React from 'react';
import PageLayout from '../components/PageLayout';
import Timeline from '../sections/Timeline';

const JourneyPage = () => {
  return (
    <PageLayout
      label="My Journey"
      title="How I got"
      titleAccent="here"
      description="From writing my first Python script to shipping full-stack applications — a timeline of milestones, learnings, and growth."
    >
      <Timeline />
    </PageLayout>
  );
};

export default JourneyPage;
