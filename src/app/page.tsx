import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import AIFeatures from '@/components/AIFeatures';
import BrainTraining from '@/components/BrainTraining';
import Customization from '@/components/Customization';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <AIFeatures />
      <Customization />
      <BrainTraining />
      <CTA />
      <Footer />
    </main>
  );
} 