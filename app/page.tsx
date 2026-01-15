import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MarketSection from '@/components/MarketSection';
import PainPoints from '@/components/PainPoints';
import SolutionSection from '@/components/SolutionSection';
import Team from '@/components/Team';
import Ecosystem from '@/components/Ecosystem';
import Recruit from '@/components/Recruit';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-black dark:bg-black">
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
}
