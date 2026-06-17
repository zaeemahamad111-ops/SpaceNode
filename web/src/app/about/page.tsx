import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import RevealWrapper from '@/components/ui/RevealWrapper';
import NodeMesh from '@/components/ui/NodeMesh';
import AboutTestimonials from '@/components/sections/about/AboutTestimonials';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Space Node Architects, our vision, purpose, and the collective of architects shaping our studio.',
};

// --- HERO ---
function AboutHero() {
  return (
    <section className="relative pt-32 pb-0 bg-[#F8F9FA] overflow-hidden min-h-[80vh] flex items-end" aria-label="About hero">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 pb-0 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="pb-16">
            <RevealWrapper>
              <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-[#0D7A9E] block mb-6">
                Who We Are
              </span>
            </RevealWrapper>
            <RevealWrapper delay={0.1}>
              <h1 className="font-serif text-5xl md:text-7xl text-[#161616] leading-[1.05] tracking-[-0.02em] mb-8">
                Creating Spaces,<br />
                Not Just<br />
                <span className="italic text-[#0D7A9E]">Structures.</span>
              </h1>
            </RevealWrapper>
            <RevealWrapper delay={0.2}>
              <p className="font-sans font-light text-lg text-[#6B7280] leading-relaxed max-w-md mb-8">
                We are a collective of architects, designers, and thinkers crafting meaningful spaces through architecture, interiors, landscapes, and project management.
              </p>
            </RevealWrapper>
          </div>

          {/* Hero image */}
          <RevealWrapper delay={0.15} direction="right" className="relative h-[500px] lg:h-[600px] overflow-hidden">
            <Image
              src="/images/about-hero.png"
              alt="Dramatic contemporary building facade"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#F8F9FA]/20" />
            <div className="absolute inset-0 opacity-20">
              <NodeMesh variant="section" animated={false} />
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

// --- STUDIO STORY ---
function StudioStory() {
  return (
    <section className="py-32 md:py-40 bg-white overflow-hidden" aria-labelledby="studio-story-heading">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealWrapper direction="left">
            <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-[#0D7A9E] block mb-6">
              Our Studio
            </span>
            <h2 id="studio-story-heading" className="font-serif text-4xl md:text-5xl text-[#161616] leading-tight mb-8">
              A studio shaped<br />by vision and<br /><span className="italic">purpose.</span>
            </h2>
            <p className="font-sans font-light text-base text-[#6B7280] leading-relaxed mb-6">
              Space Node Architects is a multidisciplinary architecture and design practice creating refined residential and commercial environments. Rooted in purposeful planning, timeless aesthetics, and thoughtful execution, we shape spaces that inspire and endure.
            </p>
            <p className="font-sans font-light text-base text-[#6B7280] leading-relaxed mb-10">
              With projects and design collaborations spanning India, UAE, Australia, and the USA, our studio brings a global perspective to every space we create.
            </p>
            <div className="pt-8 border-t border-[#E5E7EB]">
              {[
                { num: '170+', label: 'Projects Completed' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-3xl text-[#0D7A9E]">{s.num}</div>
                  <div className="font-sans text-[10px] tracking-[0.12em] uppercase text-[#6B7280] mt-1 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.2} direction="right" className="relative h-[500px] overflow-hidden">
            <Image
              src="/images/expertise-interior.png"
              alt="Space Node studio — premium interior design example"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

// --- TEAM GRID ---
const team = [
  { 
    name: 'Ar. Jeffin Kuncheria Varghese', 
    title: 'Principal Architect, Founder', 
    image: '', 
    desc: "Guiding the studio's architectural vision with a profound commitment to contextual design and material honesty. Jeffin brings over a decade of experience in crafting bespoke spaces." 
  },
  { 
    name: 'Ar. Jinsamol P Reji', 
    title: 'Design Head, Co-founder', 
    image: '', 
    desc: "Leading the interior and spatial design narratives. Jinsamol seamlessly integrates architectural intent with refined interior detailing, creating holistic environments that resonate with purpose." 
  },
  { 
    name: 'Ar. Bibite Joy', 
    title: 'Associate Architect', 
    image: '', 
    desc: "Driving project execution and technical excellence. Bibite ensures that complex architectural concepts are translated flawlessly into built reality, focusing on precision and sustainability." 
  },
  { 
    name: 'Ar. George Zachariah Mathew', 
    title: 'Associate Architect', 
    image: '', 
    desc: "Spearheading design development and client coordination. George bridges the gap between conceptual ideation and practical functionality, ensuring every project meets our exacting standards." 
  },
];

function TeamGrid() {
  return (
    <section className="py-32 md:py-40 bg-white" aria-labelledby="team-heading">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <RevealWrapper className="mb-16">
          <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-[#0D7A9E] block mb-4">
            Our Team
          </span>
          <h2 id="team-heading" className="font-serif text-4xl md:text-5xl text-[#161616]">
            The <span className="italic">Collective</span>
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {team.map((member, i) => (
            <RevealWrapper key={member.name} delay={i * 0.1}>
              <div className="group">
                <div className="overflow-hidden aspect-[3/4] mb-5 relative bg-[#F8F9FA]">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center border border-[#E5E7EB]">
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                        <line x1="10" y1="10" x2="50" y2="50" stroke="#0D7A9E" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="50" y1="10" x2="10" y2="50" stroke="#0D7A9E" strokeWidth="1" strokeDasharray="4 4" />
                        <rect x="15" y="15" width="30" height="30" stroke="#0D7A9E" strokeWidth="1" fill="none" />
                      </svg>
                    </div>
                  )}
                  {/* Node connection indicator */}
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#0D7A9E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-serif text-lg text-[#161616] mb-1">{member.name}</h3>
                <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-[#0D7A9E] mb-3">{member.title}</p>
                <p className="font-sans font-light text-sm text-[#6B7280] leading-relaxed">
                  {member.desc}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>

        {/* Node connection between team members */}
        <RevealWrapper delay={0.4} className="mt-10 overflow-hidden">
          <svg className="w-full h-6" viewBox="0 0 800 24" xmlns="http://www.w3.org/2000/svg">
            {[0, 1, 2, 3].map((i) => (
              <g key={i}>
                <circle cx={100 + i * 200} cy={12} r="3" fill="#0D7A9E" opacity="0.6"/>
                {i < 3 && (
                  <line x1={103 + i * 200} y1={12} x2={297 + i * 200} y2={12}
                    stroke="#0D7A9E" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3"/>
                )}
              </g>
            ))}
          </svg>
        </RevealWrapper>
      </div>
    </section>
  );
}

// --- ABOUT PAGE CTA ---
function AboutCTA() {
  return (
    <section className="py-28 md:py-36 bg-[#F8F9FA]" aria-label="About CTA">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 text-center">
        <RevealWrapper>
          <h2 className="font-serif text-4xl md:text-6xl text-[#161616] leading-tight mb-10">
            Let's Create<br />
            Something <span className="italic text-[#0D7A9E]">Exceptional</span>.
          </h2>
        </RevealWrapper>
        <RevealWrapper delay={0.1}>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-[#0A2333] text-white px-10 py-5 font-sans text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#0D7A9E] transition-all duration-300"
          >
            Book Consultation
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </RevealWrapper>
      </div>
    </section>
  );
}

// --- ABOUT PAGE ---
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StudioStory />
      <TeamGrid />
      <AboutTestimonials />
      <AboutCTA />
    </>
  );
}
