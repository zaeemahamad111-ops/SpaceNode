'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import RevealWrapper from '@/components/ui/RevealWrapper';

const services = [
  {
    num: '01',
    title: 'Architectural Design',
    desc: 'We provide end-to-end architectural design solutions—from concept development and planning to technical drawings, approvals, and execution support.',
    href: '/expertise#architecture',
    image: '/images/expertise-architecture.png'
  },
  {
    num: '02',
    title: 'Interior Design',
    desc: 'At Space Node Architects, we create thoughtfuly designed interiors that balance aesthetics, comfort, and functionality.',
    href: '/expertise#interior',
    image: '/images/expertise-interior.png'
  },
  {
    num: '03',
    title: 'Landscape Design',
    desc: 'We create thoughtfully designed outdoor environments that enhance the beauty and functionality of a space.',
    href: '/expertise#landscape',
    image: '/images/expertise-landscape.png'
  },
  {
    num: '04',
    title: 'Project Management',
    desc: 'Project management is one of our core strengths—especially for clients residing abroad or who require trusted on-ground coordination.',
    href: '/expertise#consultancy',
    image: '/images/expertise-consultancy.png'
  },
];

export default function ExpertisePreview() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-white relative" aria-labelledby="expertise-heading">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        
        {/* Header */}
        <RevealWrapper className="mb-12 md:mb-16">
          <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-[#0D7A9E] block mb-4 text-center md:text-left">
            What We Do
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 id="expertise-heading" className="font-serif text-4xl md:text-5xl text-[#161616] leading-tight text-center md:text-left">
              Our Areas of <br className="hidden md:block" /><span className="italic text-[#0D7A9E]">Expertise</span>
            </h2>
            <Link
              href="/expertise"
              className="hidden md:flex items-center gap-1.5 group font-sans text-[11px] font-semibold tracking-[0.15em] uppercase text-[#161616] border-b border-[#161616] pb-1 hover:text-[#0D7A9E] hover:border-[#0D7A9E] transition-all duration-300 mb-2"
            >
              Explore All <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </RevealWrapper>

        {/* Interactive Horizontal Accordion */}
        <RevealWrapper delay={0.2}>
          <div className="flex flex-row overflow-x-auto lg:overflow-visible w-full h-[400px] md:h-[500px] lg:h-[550px] gap-4 lg:gap-3 pb-6 lg:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {services.map((service, i) => {
              const isActive = hoveredIndex === i;
              
              return (
                <div
                  key={service.num}
                  onMouseEnter={() => setHoveredIndex(i)}
                  className={`relative overflow-hidden rounded-[2rem] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group shrink-0 snap-center w-[85vw] md:w-[60vw] lg:w-auto lg:shrink ${
                    isActive ? 'lg:flex-[3]' : 'lg:flex-1'
                  }`}
                >
                  <Link href={service.href} className="block w-full h-full relative">
                    {/* Background Image */}
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 1024px) 85vw, 50vw"
                      priority={i === 0}
                    />
                    
                    {/* Dark Gradient Overlay for text readability */}
                    <div className={`absolute inset-0 transition-opacity duration-700 ${
                      isActive 
                        ? 'bg-gradient-to-t from-black/90 via-black/40 to-black/10' 
                        : 'bg-gradient-to-t from-black/90 via-black/40 to-black/10 lg:bg-black/40 lg:group-hover:bg-black/20'
                    }`} />

                    {/* Content */}
                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end h-full">
                      <div className="mt-auto">
                        {/* Title - Truncate and scale down slightly when inactive on desktop */}
                        <h3 className={`font-sans tracking-wide uppercase text-white transition-all duration-700 whitespace-nowrap overflow-hidden text-ellipsis ${
                          isActive 
                            ? 'text-2xl md:text-3xl font-semibold mb-3' 
                            : 'text-2xl md:text-3xl font-semibold mb-3 lg:text-base lg:font-medium lg:mb-0 lg:origin-left'
                        }`}>
                          {service.title}
                        </h3>
                        
                        {/* Description - Fade and slide in/out on desktop, always visible on mobile */}
                        <div 
                          className={`grid transition-all duration-700 ease-in-out ${
                            isActive 
                              ? 'grid-rows-[1fr] opacity-100' 
                              : 'grid-rows-[1fr] opacity-100 lg:grid-rows-[0fr] lg:opacity-0'
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="font-sans font-light text-sm text-white/80 leading-relaxed max-w-sm mb-4">
                              {service.desc}
                            </p>
                            <span className="inline-flex items-center gap-1.5 font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-white hover:text-[#0D7A9E] transition-colors">
                              Discover More <ArrowUpRight size={14} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          
          <div className="mt-8 flex justify-center md:hidden">
            <Link
              href="/expertise"
              className="inline-flex items-center gap-1.5 group font-sans text-[11px] font-semibold tracking-[0.15em] uppercase text-[#161616] border-b border-[#161616] pb-1"
            >
              Explore All <ArrowUpRight size={13} />
            </Link>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
