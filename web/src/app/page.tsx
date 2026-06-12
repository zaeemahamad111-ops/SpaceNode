import type { Metadata } from 'next';
import HeroSection from '@/components/sections/home/HeroSection';
import PhilosophyStatement from '@/components/sections/home/PhilosophyStatement';
import ExpertisePreview from '@/components/sections/home/ExpertisePreview';
import StudioProcess from '@/components/sections/home/StudioProcess';
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
      <ExpertisePreview />
      <PhilosophyStatement />
      <StudioProcess />
      <HomeCTA />
    </>
  );
}
