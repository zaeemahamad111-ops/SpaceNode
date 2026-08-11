import type { Metadata } from 'next';
import HeroSection from '@/components/sections/home/HeroSection';
import PhilosophyStatement from '@/components/sections/home/PhilosophyStatement';
import ExpertisePreview from '@/components/sections/home/ExpertisePreview';
import HomeCTA from '@/components/sections/home/HomeCTA';
import { getPageMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return getPageMetadata('home');
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ExpertisePreview />
      <PhilosophyStatement />
      <HomeCTA />
    </>
  );
}
