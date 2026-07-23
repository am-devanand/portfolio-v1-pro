import React from 'react';
import PageLayout from '../components/PageLayout';
import Contact from '../sections/Contact';

const ContactPage = () => {
  return (
    <PageLayout
      label="Get In Touch"
      title="Let's work"
      titleAccent="together"
      description="Have a project in mind or just want to connect? I'm available for freelance work and open to new opportunities."
    >
      <Contact />
    </PageLayout>
  );
};

export default ContactPage;
