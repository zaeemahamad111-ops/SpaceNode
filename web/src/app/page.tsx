import type { Metadata } from 'next';
import HeroSection from '@/components/sections/home/HeroSection';
import SelectedWorks from '@/components/sections/home/SelectedWorks';
import AboutPreview from '@/components/sections/home/AboutPreview';
import PhilosophyStatement from '@/components/sections/home/PhilosophyStatement';
import ExpertisePreview from '@/components/sections/home/ExpertisePreview';
import HomeCTA from '@/components/sections/home/HomeCTA';

export const metadata: Metadata = {
  title: 'Space Node Architects | Connecting Spaces, Functions, and Experiences',
  description:
    'Space Node Architects — a multidisciplinary architectural practice based in Cochin, Kerala. Delivering innovative architecture, interior design, and landscape projects across India, UAE, and USA.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SelectedWorks />
      <AboutPreview />
      <PhilosophyStatement />
      <ExpertisePreview />
      <HomeCTA />
    </>
  );
}
