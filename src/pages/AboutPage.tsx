import React from 'react';
import { AboutFounder } from '../components/AboutFounder';

interface AboutPageProps {
  onOpenSampleModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenSampleModal }) => {
  return (
    <div className="pt-24 pb-16 space-y-0">
      <AboutFounder onOpenSampleModal={onOpenSampleModal} />
    </div>
  );
};
