'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
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

// --- TESTIMONIALS ---
const testimonials = [
  {
    quote: "Space Node transformed our vision into a timeless space that feels both deeply rooted and beautifully contemporary.",
    name: "Anand Menon",
    designation: "Client",
    company: "The Kerala Residence",
    image: "/images/expertise-architecture.png",
    clientImage: ""
  },
  {
    quote: "Their meticulous attention to detail and profound understanding of light created a workspace that our team genuinely loves.",
    name: "Sarah Jenkins",
    designation: "CEO",
    company: "TechNova Solutions",
    image: "/images/expertise-interior.png",
    clientImage: ""
  },
  {
    quote: "From concept to execution, the process was seamless. They masterfully blended nature with architecture to give us an unforgettable retreat.",
    name: "Arun Patel",
    designation: "Managing Director",
    company: "Luxe Hospitality Group",
    image: "/images/expertise-landscape.png",
    clientImage: ""
  }
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const goToPrev = () => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section className="py-24 md:py-32 bg-[#F8F9FA] overflow-hidden" aria-label="Client Testimonials">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        
        <RevealWrapper className="mb-12">
          <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-[#0D7A9E] block mb-4">
            Client Voices
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#161616] leading-tight">
            Perspectives from<br /><span className="italic text-[#0D7A9E]">our clients</span>
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Architectural Image Side */}
          <div className="lg:col-span-5 relative h-[400px] md:h-[500px] w-full overflow-hidden bg-[#E5E7EB]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="absolute inset-0"
              >
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].company}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Architectural overlay lines */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-8 left-8 w-8 h-px bg-white/60" />
              <div className="absolute top-8 left-8 w-px h-8 bg-white/60" />
              <div className="absolute bottom-8 right-8 w-8 h-px bg-white/60" />
              <div className="absolute bottom-8 right-8 w-px h-8 bg-white/60" />
            </div>
          </div>

          {/* Testimonial Content Side */}
          <div className="lg:col-span-7 flex flex-col justify-between py-6">
            
            <div className="relative min-h-[300px] md:min-h-[250px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <svg className="w-8 h-8 mb-6" viewBox="0 0 40 40" fill="none">
                    <circle cx="10" cy="10" r="3" fill="#0D7A9E" opacity="0.8"/>
                    <circle cx="30" cy="30" r="2.5" fill="#0D7A9E" opacity="0.6"/>
                    <line x1="10" y1="10" x2="30" y2="30" stroke="#0D7A9E" strokeWidth="1" opacity="0.5"/>
                  </svg>
                  
                  <blockquote className="font-serif text-3xl md:text-4xl text-[#161616] leading-[1.3] mb-10">
                    &ldquo;{testimonials[currentIndex].quote}&rdquo;
                  </blockquote>
                  
                  <div className="flex items-center gap-5">
                    {/* Circular Avatar Cutout */}
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-[#E5E7EB] border border-[#D1D5DB] flex items-center justify-center relative shrink-0">
                      {testimonials[currentIndex].clientImage ? (
                        <Image
                          src={testimonials[currentIndex].clientImage}
                          alt={testimonials[currentIndex].name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <svg className="w-6 h-6 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                      )}
                    </div>
                    
                    <div>
                      <p className="font-sans text-[13px] font-bold tracking-[0.1em] uppercase text-[#161616] mb-1">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#6B7280] mb-1">
                        {testimonials[currentIndex].designation}
                      </p>
                      <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#0D7A9E]">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Architectural Navigation Tabs */}
            <div className="mt-12 md:mt-16 flex items-center gap-8 border-t border-[#E5E7EB] pt-6">
              
              <div className="flex gap-2">
                <button 
                  onClick={goToPrev}
                  className="p-3 border border-[#E5E7EB] text-[#161616] hover:bg-[#0D7A9E] hover:text-white hover:border-[#0D7A9E] transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} strokeWidth={1.5} />
                </button>
                <button 
                  onClick={goToNext}
                  className="p-3 border border-[#E5E7EB] text-[#161616] hover:bg-[#0D7A9E] hover:text-white hover:border-[#0D7A9E] transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} strokeWidth={1.5} />
                </button>
              </div>

              {/* Progress Indicator */}
              <div className="flex-1 flex items-center gap-4">
                <span className="font-sans text-[10px] tracking-[0.2em] font-semibold text-[#161616]">
                  0{currentIndex + 1}
                </span>
                <div className="flex-1 h-px bg-[#E5E7EB] relative overflow-hidden">
                  <motion.div 
                    className="absolute top-0 left-0 h-full bg-[#0D7A9E]"
                    initial={{ width: '0%' }}
                    animate={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <span className="font-sans text-[10px] tracking-[0.2em] font-medium text-[#9CA3AF]">
                  0{testimonials.length}
                </span>
              </div>
              
            </div>

          </div>
        </div>
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
      <Testimonials />
      <AboutCTA />
    </>
  );
}
