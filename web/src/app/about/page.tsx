'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import RevealWrapper from '@/components/ui/RevealWrapper';
import NodeMesh from '@/components/ui/NodeMesh';

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
                Creating Places,<br />
                Not Just<br />
                <span className="italic text-[#0D7A9E]">Buildings.</span>
              </h1>
            </RevealWrapper>
            <RevealWrapper delay={0.2}>
              <p className="font-sans font-light text-lg text-[#6B7280] leading-relaxed max-w-md mb-8">
                We are a collective of architects, designers and thinkers committed to crafting spaces that endure, connect and inspire.
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
              A studio driven<br />by purpose and<br /><span className="italic">passion.</span>
            </h2>
            <p className="font-sans font-light text-base text-[#6B7280] leading-relaxed mb-6">
              Space Node is a multidisciplinary architecture studio creating timeless residential, commercial and landscape environments. Founded in 2008 in Cochin, Kerala, we have grown into a practice that operates across India, the UAE, and the United States.
            </p>
            <p className="font-sans font-light text-base text-[#6B7280] leading-relaxed mb-10">
              Our approach is rooted in the dialogue between the environment and human experience, ensuring every line drawn serves a narrative of light and form. We believe that great architecture begins with listening — to the site, to the client, and to the culture.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#E5E7EB]">
              {[
                { num: '120+', label: 'Projects Completed' },
                { num: '45+', label: 'Design Awards' },
                { num: '3', label: 'Global Offices' },
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

// --- PHILOSOPHY DIAGRAM ---
const philosophyNodes = [
  { id: 'context', label: 'Context', angle: 270, desc: 'Every project begins with a deep reading of its site, culture, and climate.' },
  { id: 'function', label: 'Function', angle: 330, desc: 'Form follows function — spaces that work intuitively for those who inhabit them.' },
  { id: 'experience', label: 'Experience', angle: 30, desc: 'Architecture is ultimately measured by the human experience it enables.' },
  { id: 'innovation', label: 'Innovation', angle: 90, desc: 'We push the boundaries of material, technology, and spatial thinking.' },
  { id: 'sustainability', label: 'Sustainability', angle: 150, desc: 'Buildings designed to endure and perform responsibly through time.' },
  { id: 'execution', label: 'Execution', angle: 210, desc: 'Uncompromising craft and attention to detail from concept to completion.' },
];

function PhilosophyDiagram() {
  const [active, setActive] = useState<string | null>(null);
  const cx = 50, cy = 50, r = 32;

  return (
    <section className="py-32 md:py-40 bg-[#F8F9FA] overflow-hidden" aria-labelledby="philosophy-diagram-heading">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <RevealWrapper className="text-center mb-16">
          <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-[#0D7A9E] block mb-4">
            Our Approach
          </span>
          <h2 id="philosophy-diagram-heading" className="font-serif text-4xl md:text-5xl text-[#161616] leading-tight">
            Designing the<br /><span className="italic">Connected Fabric</span>
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* SVG Diagram */}
          <RevealWrapper className="relative">
            <svg viewBox="0 0 100 100" className="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
              {/* Connection lines from center to nodes */}
              {philosophyNodes.map((node) => {
                const rad = (node.angle * Math.PI) / 180;
                const nx = cx + r * Math.cos(rad);
                const ny = cy + r * Math.sin(rad);
                const isActive = active === node.id;
                return (
                  <line
                    key={`line-${node.id}`}
                    x1={cx} y1={cy} x2={nx} y2={ny}
                    stroke={isActive ? '#0D7A9E' : '#6EB8D0'}
                    strokeWidth={isActive ? '0.8' : '0.4'}
                    opacity={isActive ? 0.9 : 0.4}
                    strokeDasharray={isActive ? 'none' : '2 2'}
                    style={{ transition: 'all 0.3s ease' }}
                  />
                );
              })}

              {/* Outer polygon */}
              <polygon
                points={philosophyNodes.map((n) => {
                  const rad = (n.angle * Math.PI) / 180;
                  return `${cx + r * Math.cos(rad)},${cy + r * Math.sin(rad)}`;
                }).join(' ')}
                fill="none"
                stroke="#6EB8D0"
                strokeWidth="0.3"
                opacity="0.2"
              />

              {/* Outer nodes */}
              {philosophyNodes.map((node) => {
                const rad = (node.angle * Math.PI) / 180;
                const nx = cx + r * Math.cos(rad);
                const ny = cy + r * Math.sin(rad);
                const isActive = active === node.id;
                const labelRad = (node.angle * Math.PI) / 180;
                const lx = cx + (r + 12) * Math.cos(labelRad);
                const ly = cy + (r + 12) * Math.sin(labelRad);

                return (
                  <g key={node.id} style={{ cursor: 'pointer' }} onClick={() => setActive(active === node.id ? null : node.id)}>
                    {/* Pulse ring */}
                    {isActive && (
                      <circle cx={nx} cy={ny} r="4" fill="none" stroke="#0D7A9E" strokeWidth="0.4" opacity="0.5"
                        style={{ animation: 'nodeRing 2s ease-out infinite' }} />
                    )}
                    {/* Node dot */}
                    <circle
                      cx={nx} cy={ny} r={isActive ? '2.5' : '1.8'}
                      fill={isActive ? '#0D7A9E' : '#6EB8D0'}
                      style={{ transition: 'all 0.3s ease' }}
                    />
                    {/* Label */}
                    <text
                      x={lx} y={ly}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="3"
                      fontFamily="'Hanken Grotesk', sans-serif"
                      fill={isActive ? '#0D7A9E' : '#6B7280'}
                      fontWeight={isActive ? '600' : '400'}
                      style={{ transition: 'fill 0.3s ease' }}
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}

              {/* Center node */}
              <circle cx={cx} cy={cy} r="8" fill="#0A2333" opacity="0.9" />
              <circle cx={cx} cy={cy} r="8" fill="none" stroke="#0D7A9E" strokeWidth="0.5" opacity="0.6" />
              <text x={cx} y={cy - 1.5} textAnchor="middle" fontSize="2.2" fontFamily="'Playfair Display', serif" fill="white" opacity="0.9">
                SPACE NODE
              </text>
              <text x={cx} y={cy + 2.5} textAnchor="middle" fontSize="1.6" fontFamily="'Hanken Grotesk', sans-serif" fill="#6EB8D0" opacity="0.7">
                ARCHITECTS
              </text>
            </svg>
          </RevealWrapper>

          {/* Active node description */}
          <div className="space-y-4">
            {philosophyNodes.map((node) => (
              <motion.div
                key={node.id}
                onClick={() => setActive(active === node.id ? null : node.id)}
                className={`p-5 border cursor-pointer transition-all duration-300 ${
                  active === node.id
                    ? 'border-[#0D7A9E] bg-white'
                    : 'border-[#E5E7EB] bg-transparent hover:border-[#6EB8D0]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 transition-colors duration-300 ${active === node.id ? 'bg-[#0D7A9E]' : 'bg-[#6EB8D0]'}`} />
                    <h3 className={`font-sans font-semibold text-sm tracking-[0.1em] uppercase transition-colors duration-300 ${active === node.id ? 'text-[#0D7A9E]' : 'text-[#161616]'}`}>
                      {node.label}
                    </h3>
                  </div>
                  <ArrowUpRight size={14} className={`transition-all duration-300 ${active === node.id ? 'text-[#0D7A9E] rotate-0' : 'text-[#6B7280] -rotate-45'}`} />
                </div>
                <motion.div
                  initial={false}
                  animate={{ height: active === node.id ? 'auto' : 0, opacity: active === node.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="font-sans font-light text-sm text-[#6B7280] leading-relaxed pt-3">
                    {node.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- TEAM GRID ---
const team = [
  { name: 'Ar. Ranjith Menon', title: 'Founding Principal', image: '/images/expertise-architecture.png' },
  { name: 'Ar. Priya Nair', title: 'Design Director', image: '/images/expertise-interior.png' },
  { name: 'Ar. Arjun Das', title: 'Associate Director', image: '/images/about-hero.png' },
  { name: 'Ar. Meera Pillai', title: 'Landscape Lead', image: '/images/expertise-landscape.png' },
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <RevealWrapper key={member.name} delay={i * 0.1}>
              <div className="group">
                <div className="overflow-hidden aspect-[3/4] mb-4 relative bg-[#F8F9FA]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Node connection indicator */}
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#0D7A9E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-serif text-lg text-[#161616] mb-0.5">{member.name}</h3>
                <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-[#0D7A9E]">{member.title}</p>
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

// --- TESTIMONIALS ---
function Testimonials() {
  return (
    <section className="relative py-32 md:py-40 bg-[#0A2333] overflow-hidden" aria-label="Testimonials">
      <div className="absolute inset-0 opacity-20">
        <NodeMesh variant="section" animated={true} />
      </div>
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20 text-center">
        <RevealWrapper>
          <svg className="w-10 h-10 mx-auto mb-8" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="8" r="3" fill="#0D7A9E" opacity="0.8"/>
            <circle cx="8" cy="32" r="2.5" fill="#0D7A9E" opacity="0.6"/>
            <circle cx="32" cy="32" r="2.5" fill="#0D7A9E" opacity="0.6"/>
            <line x1="20" y1="8" x2="8" y2="32" stroke="#6EB8D0" strokeWidth="0.8" opacity="0.5"/>
            <line x1="20" y1="8" x2="32" y2="32" stroke="#6EB8D0" strokeWidth="0.8" opacity="0.5"/>
            <line x1="8" y1="32" x2="32" y2="32" stroke="#6EB8D0" strokeWidth="0.5" opacity="0.3"/>
          </svg>
        </RevealWrapper>
        <RevealWrapper delay={0.1}>
          <blockquote className="font-serif text-3xl md:text-5xl text-white leading-[1.25] max-w-3xl mx-auto mb-10">
            &ldquo;Space Node transformed our vision into a timeless space that feels both deeply rooted and beautifully contemporary.&rdquo;
          </blockquote>
        </RevealWrapper>
        <RevealWrapper delay={0.2}>
          <div className="w-12 h-px bg-[#0D7A9E] mx-auto mb-5" />
          <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-white/40">
            — Client, The Kerala Residence
          </p>
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
      <PhilosophyDiagram />
      <TeamGrid />
      <Testimonials />
      <AboutCTA />
    </>
  );
}
