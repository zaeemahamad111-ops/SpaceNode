'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import RevealWrapper from '@/components/ui/RevealWrapper';
import NodeMesh from '@/components/ui/NodeMesh';

export default function AboutPreview() {
  return (
    <section className="bg-[#F8F9FA] overflow-hidden" aria-labelledby="about-preview-heading">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        
        {/* Image side */}
        <RevealWrapper direction="left" className="relative h-[500px] lg:h-auto order-1 lg:order-none">
          <Image
            src="/images/about-hero.png"
            alt="Space Node Architects studio — bold contemporary building facade"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          {/* Node overlay */}
          <div className="absolute inset-0 opacity-30">
            <NodeMesh variant="section" animated={false} />
          </div>
          {/* Blue gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2333]/40 to-transparent" />
          
          {/* Floating stat card */}
          <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-5 border-l-2 border-[#0D7A9E]">
            <div className="font-serif text-3xl text-[#161616]">2008</div>
            <div className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#6B7280] mt-1">Founded in Cochin</div>
          </div>
        </RevealWrapper>

        {/* Content side */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-20 lg:py-28">
          <RevealWrapper>
            <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-[#0D7A9E] block mb-6">
              Who We Are
            </span>
          </RevealWrapper>
          
          <RevealWrapper delay={0.1}>
            <h2 id="about-preview-heading" className="font-serif text-4xl md:text-5xl text-[#161616] leading-tight mb-6">
              Architecture<br />
              Beyond<br />
              <span className="italic text-[#0D7A9E]">Buildings.</span>
            </h2>
          </RevealWrapper>

          <RevealWrapper delay={0.2}>
            <p className="font-sans font-light text-base text-[#6B7280] leading-relaxed mb-6 max-w-md">
              Space Node Architects is a multidisciplinary practice rooted in the belief that architecture is not merely the creation of buildings — it is the orchestration of spaces, functions, and human experiences.
            </p>
            <p className="font-sans font-light text-base text-[#6B7280] leading-relaxed mb-10 max-w-md">
              From our studio in Cochin, Kerala, we work across India, UAE, and USA, crafting environments that connect people with place.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={0.3}>
            <div className="flex gap-12 mb-10 pb-10 border-b border-[#E5E7EB]">
              {[
                { num: '120+', label: 'Projects' },
                { num: '3', label: 'Countries' },
                { num: '15+', label: 'Years' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif text-3xl text-[#161616]">{stat.num}</div>
                  <div className="font-sans text-[10px] tracking-[0.15em] uppercase text-[#6B7280] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.4}>
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 font-sans text-[11px] font-semibold tracking-[0.15em] uppercase text-[#0D7A9E] border-b border-[#0D7A9E] pb-1 hover:text-[#0A2333] hover:border-[#0A2333] transition-all duration-300"
            >
              Our Story
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
