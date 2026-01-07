import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ReferralProgram from '../components/ReferralProgram';

const ReferralProgramPage: React.FC = () => {
  return (
    <div className="retro-container">
      <Navigation />
      <main>
        <ReferralProgram />
      </main>
      <Footer />
    </div>
  );
};

export default ReferralProgramPage;

