import { Navbar } from '@/features/navigation';
import { Hero } from '@/features/hero';
import { MarketSection } from '@/features/market';
import { PainPoints } from '@/features/pain-points';
import { SolutionSection } from '@/features/solutions';
import { Team } from '@/features/team';
import { Ecosystem } from '@/features/ecosystem';
import { Recruit } from '@/features/recruit';
import { Footer } from '@/features/navigation';

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
