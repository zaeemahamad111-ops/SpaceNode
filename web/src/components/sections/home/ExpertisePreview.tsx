'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealWrapper from '@/components/ui/RevealWrapper';

const services = [
  {
    num: '01',
    title: 'Architectural Design Services',
    desc: 'We provide end-to-end architectural design solutions—from concept development and planning to technical drawings, approvals, and execution support.',
    href: '/expertise#architecture',
    image: '/images/expertise-architecture.png'
  },
  {
    num: '02',
    title: 'Interior design services',
    desc: 'At Space Node Architects, we create thoughtfuly designed interiors that balance aesthetics, comfort, and functionality.',
    href: '/expertise#interior',
    image: '/images/expertise-interior.png'
  },
  {
    num: '03',
    title: 'Landscape Design Services',
    desc: 'We create thoughtfully designed outdoor environments that enhance the beauty and functionality of a space.',
    href: '/expertise#landscape',
    image: '/images/expertise-landscape.png'
  },
  {
    num: '04',
    title: 'Project Management Service',
    desc: 'Project management is one of our core strengths—especially for clients residing abroad or who require trusted on-ground coordination.',
    href: '/expertise#consultancy',
    image: '/images/expertise-consultancy.png'
  },
];

export default function ExpertisePreview() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section className="py-32 md:py-40 bg-[#F8F9FA] relative" aria-labelledby="expertise-heading">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        
        {/* Header */}
        <RevealWrapper className="mb-20">
          <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-[#0D7A9E] block mb-4">
            What We Do
          </span>
          <div className="flex items-end justify-between">
            <h2 id="expertise-heading" className="font-serif text-5xl md:text-6xl text-[#161616] leading-tight">
              Our Areas of <span className="italic text-[#0D7A9E]">Expertise</span>
            </h2>
            <Link
              href="/expertise"
              className="hidden md:flex items-center gap-1.5 group font-sans text-[11px] font-semibold tracking-[0.15em] uppercase text-[#161616] border-b border-[#161616] pb-1 hover:text-[#0D7A9E] hover:border-[#0D7A9E] transition-all duration-300 mb-2"
            >
              Explore All <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </RevealWrapper>

        {/* Interactive Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left: Interactive List */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="space-y-0 border-t border-[#E5E7EB]">
              {services.map((service, i) => {
                const isHovered = hoveredIndex === i;
                return (
                  <div
                    key={service.num}
                    className="border-b border-[#E5E7EB] group"
                    onMouseEnter={() => setHoveredIndex(i)}
                  >
                    <Link href={service.href} className="block py-10 relative overflow-hidden">
                      {/* Hover background slide effect */}
                      <div 
                        className={`absolute inset-0 bg-white transition-transform duration-500 origin-left ${
                          isHovered ? 'scale-x-100' : 'scale-x-0'
                        }`} 
                      />
                      
                      <div className="relative z-10 flex items-start gap-5 md:gap-8 lg:gap-12 px-2 md:px-4">
                        <span className={`font-sans text-[11px] tracking-[0.2em] font-bold transition-colors duration-300 pt-1 md:pt-3 ${
                          isHovered ? 'text-[#0D7A9E]' : 'text-[#9CA3AF]'
                        }`}>
                          {service.num}
                        </span>
                        
                        <div className="flex-1">
                          <h3 className={`font-serif text-3xl md:text-4xl lg:text-5xl transition-colors duration-300 mb-2 md:mb-4 ${
                            isHovered ? 'text-[#0D7A9E]' : 'text-[#161616]'
                          }`}>
                            {service.title}
                          </h3>
                          
                          {/* Smooth expanding description */}
                          <div 
                            className={`grid transition-all duration-500 ease-in-out ${
                              isHovered ? 'grid-rows-[1fr] opacity-100 mt-2 md:mt-4' : 'grid-rows-[0fr] opacity-0'
                            }`}
                          >
                            <div className="overflow-hidden">
                              <p className="font-sans font-light text-sm md:text-[15px] text-[#4B5563] leading-relaxed max-w-md pb-2">
                                {service.desc}
                              </p>
                              <div className="flex items-center gap-2 mt-4 text-[#0D7A9E] font-sans text-[10px] font-bold tracking-[0.2em] uppercase">
                                Discover More <ArrowUpRight size={14} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Sticky Image Reveal */}
          <div className="lg:col-span-5 hidden lg:block relative">
            <div className="sticky top-32 w-full aspect-[4/5] overflow-hidden bg-white shadow-2xl">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 backdrop-blur-md z-20 flex items-center justify-center border-b border-l border-white/20">
                <ArrowUpRight size={24} className="text-white" />
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={services[hoveredIndex].image}
                    alt={services[hoveredIndex].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                  {/* Subtle dark gradient overlay to make images feel premium */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Title overlay on image */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="absolute bottom-10 left-10 text-white"
                  >
                    <span className="font-sans text-[10px] tracking-[0.2em] uppercase opacity-70 block mb-2">
                      Expertise
                    </span>
                    <h4 className="font-serif text-3xl">
                      {services[hoveredIndex].title}
                    </h4>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Mobile CTA */}
        <RevealWrapper className="mt-12 lg:hidden">
          <Link
            href="/expertise"
            className="flex items-center justify-center gap-2 bg-[#0D7A9E] text-white py-5 font-sans text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#0A2333] transition-colors"
          >
            Explore All Expertise <ArrowUpRight size={13} />
          </Link>
        </RevealWrapper>

      </div>
    </section>
  );
}
