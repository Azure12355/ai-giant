import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarketSection from './components/MarketSection';
import PainPoints from './components/PainPoints';
import SolutionSection from './components/SolutionSection';
import Ecosystem from './components/Ecosystem';
import Team from './components/Team';
import Recruit from './components/Recruit';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="antialiased font-sans selection:bg-brand-500 selection:text-white bg-black">
      <Navbar />
      <main>
        <Hero />
        <MarketSection />
        <PainPoints />
        <SolutionSection />
        <Team />
        <Ecosystem />
        <Recruit />
      </main>
      <Footer />
    </div>
  );
};

export default App;