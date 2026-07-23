import React from 'react';
import PageLayout from '../components/PageLayout';
import SelectedWork from '../sections/SelectedWork';
import GitHubShowcase from '../sections/GitHubShowcase';

const WorkPage = () => {
  return (
    <PageLayout
      label="Selected Work"
      title="Projects I've"
      titleAccent="built"
      description="A selection of real-world projects, open-source work, and experiments that showcase my engineering approach."
    >
      <SelectedWork />
      <GitHubShowcase />
    </PageLayout>
  );
};

export default WorkPage;
