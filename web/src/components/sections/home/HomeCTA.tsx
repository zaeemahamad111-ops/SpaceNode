'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import RevealWrapper from '@/components/ui/RevealWrapper';
import NodeMesh from '@/components/ui/NodeMesh';

export default function HomeCTA() {
  return (
    <section className="relative bg-white overflow-hidden" aria-label="Call to action">
      {/* Node mesh overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <NodeMesh variant="hero" animated={false} />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20 py-28 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Headline */}
          <RevealWrapper>
            <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-[#0D7A9E] block mb-6">
              Start a Project
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-[#161616] leading-[1.1]">
              Let's Create<br />
              Something<br />
              <span className="italic text-[#0D7A9E]">Extraordinary</span>
              <span className="text-[#0D7A9E]">.</span>
            </h2>
          </RevealWrapper>

          {/* Buttons */}
          <RevealWrapper delay={0.15} className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 md:justify-end">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-[#0A2333] text-white px-8 py-5 font-sans text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#0D7A9E] transition-all duration-300"
            >
              Book Consultation
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/914842345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-[#E5E7EB] text-[#161616] px-8 py-5 font-sans text-[11px] font-semibold tracking-[0.2em] uppercase hover:border-[#0D7A9E] hover:text-[#0D7A9E] transition-all duration-300"
            >
              <MessageCircle size={14} />
              WhatsApp Us
            </a>
          </RevealWrapper>
        </div>

        {/* Bottom atmospheric image */}
        <RevealWrapper delay={0.3} className="overflow-hidden h-72 md:h-96 relative">
          <Image
            src="/images/cta-pathway.png"
            alt="Atmospheric architectural corridor with blue-lit opening"
            fill
            sizes="100vw"
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161616]/70 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/70">
              Cochin
            </p>
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/70">
              Space Node Architects
            </p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
