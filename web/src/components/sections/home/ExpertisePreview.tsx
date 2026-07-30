'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import RevealWrapper from '@/components/ui/RevealWrapper';

const initialServices = [
  {
    num: '01',
    title: 'Architectural Design',
    desc: 'We provide end-to-end architectural design solutions—from concept development and planning to technical drawings, approvals, and execution support.',
    href: '/expertise#architecture',
    image: '/images/expertise-new-architecture.jpeg'
  },
  {
    num: '02',
    title: 'Interior Design',
    desc: 'At Space Node Architects, we create thoughtfuly designed interiors that balance aesthetics, comfort, and functionality.',
    href: '/expertise#interior',
    image: '/images/expertise-new-interior.jpeg'
  },
  {
    num: '03',
    title: 'Landscape Design',
    desc: 'We create thoughtfully designed outdoor environments that enhance the beauty and functionality of a space.',
    href: '/expertise#landscape',
    image: '/images/expertise-new-landscape.jpeg'
  },
  {
    num: '04',
    title: 'Project Management',
    desc: 'Project management is one of our core strengths—especially for clients residing abroad or who require trusted on-ground coordination.',
    href: '/expertise#consultancy',
    image: '/images/expertise-new-consultancy.jpeg'
  },
];

export default function ExpertisePreview() {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [services, setServices] = useState(initialServices);

  useEffect(() => {
    fetch('/api/cms/site-content')
      .then((res) => res.json())
      .then((data) => {
        if (data?.home) {
          setServices([
            {
              ...initialServices[0],
              image: data.home.expertiseArchitectureImage || initialServices[0].image,
            },
            {
              ...initialServices[1],
              image: data.home.expertiseInteriorImage || initialServices[1].image,
            },
            {
              ...initialServices[2],
              image: data.home.expertiseLandscapeImage || initialServices[2].image,
            },
            {
              ...initialServices[3],
              image: data.home.expertiseConsultancyImage || initialServices[3].image,
            },
          ]);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  // For Mobile Scroll Jacking
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });
  
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

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

        {/* --- DESKTOP: Interactive Horizontal Accordion --- */}
        <RevealWrapper delay={0.2} className="hidden lg:block">
          <div className="flex flex-row w-full h-[550px] gap-3">
            {services.map((service, i) => {
              const isActive = hoveredIndex === i;
              
              return (
                <div
                  key={service.num}
                  onMouseEnter={() => setHoveredIndex(i)}
                  className={`relative overflow-hidden rounded-[2rem] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group shrink ${
                    isActive ? 'flex-[3]' : 'flex-1'
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
                    
                    {/* Gradient Overlay for Readability */}
                    <div className={`absolute inset-0 transition-opacity duration-700 bg-gradient-to-t from-[#0A2333]/90 via-[#0A2333]/40 to-transparent ${
                      isActive ? 'opacity-80' : 'opacity-60 group-hover:opacity-75'
                    }`} />

                    {/* Content Container */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                      
                      {/* Top Bar: Service Number & Category Icon/Pill */}
                      <div className="flex items-center justify-between">
                        <span className="font-sans text-xs font-semibold tracking-[0.2em] text-white/70 bg-black/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                          {service.num}
                        </span>
                        <div className={`w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white transition-transform duration-500 ${
                          isActive ? 'scale-110 border-white bg-[#0D7A9E]' : 'scale-90 opacity-70'
                        }`}>
                          <ArrowUpRight size={14} />
                        </div>
                      </div>

                      {/* Bottom Section: Title & Expandable Description */}
                      <div>
                        <h3 className={`font-serif text-white tracking-tight transition-all duration-500 ${
                          isActive ? 'text-3xl md:text-4xl mb-3' : 'text-xl font-medium'
                        }`}>
                          {service.title}
                        </h3>

                        {/* Collapsible Content */}
                        <div className={`overflow-hidden transition-all duration-700 ${
                          isActive ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
                        }`}>
                          <p className="font-sans font-light text-sm text-white/80 leading-relaxed max-w-lg mb-4">
                            {service.desc}
                          </p>
                          <span className="inline-flex items-center gap-1.5 font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-[#6EB8D0] group-hover:text-white transition-colors">
                            Explore Discipline <ArrowUpRight size={11} />
                          </span>
                        </div>
                      </div>

                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </RevealWrapper>

        {/* --- MOBILE & TABLET: Pinned Horizontal Scroll Section --- */}
        <div ref={targetRef} className="block lg:hidden h-[250vh] relative">
          <div className="sticky top-24 overflow-hidden py-4">
            <motion.div style={{ x }} className="flex gap-4 w-[400vw] sm:w-[300vw]">
              {services.map((service) => (
                <div key={service.num} className="w-[80vw] sm:w-[60vw] h-[450px] relative rounded-2xl overflow-hidden shrink-0 shadow-lg border border-gray-100">
                  <Link href={service.href} className="block w-full h-full relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="80vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2333]/90 via-[#0A2333]/30 to-transparent" />
                    
                    <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                      <span className="font-sans text-xs font-semibold tracking-[0.2em] text-white/80 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full w-fit">
                        {service.num}
                      </span>
                      
                      <div>
                        <h3 className="font-serif text-2xl text-white mb-2">{service.title}</h3>
                        <p className="font-sans font-light text-xs text-white/80 leading-relaxed line-clamp-3 mb-4">
                          {service.desc}
                        </p>
                        <span className="inline-flex items-center gap-1 font-sans text-[10px] font-semibold tracking-[0.15em] uppercase text-[#6EB8D0]">
                          View Details <ArrowUpRight size={11} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
