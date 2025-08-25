import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import Portfolio from '@/components/Portfolio';
import Workflow from '@/components/Workflow';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProblemSolution />
        <Portfolio />
        <Workflow />
      </main>
      <Footer />
    </div>
  );
}
