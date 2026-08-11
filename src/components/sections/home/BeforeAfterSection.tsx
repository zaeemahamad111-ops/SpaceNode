'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import RevealWrapper from '@/components/ui/RevealWrapper';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function BeforeAfterSection() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setPosition(percentage);
    }
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    handleMove(e.clientX);
  }, [handleMove]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    handleMove(e.touches[0].clientX);
  }, [handleMove]);

  const handleMouseUp = useCallback(() => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  }, [handleMouseMove]);

  const handleTouchEnd = useCallback(() => {
    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('touchend', handleTouchEnd);
  }, [handleTouchMove]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    handleMove(e.clientX);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  }, [handleMove, handleMouseMove, handleMouseUp]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
  }, [handleMove, handleTouchMove, handleTouchEnd]);

  useEffect(() => {
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  return (
    <section className="py-24 md:py-32 bg-[#161616] text-white overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="text-center mb-16">
          <RevealWrapper>
            <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-[#0D7A9E] block mb-4">
              Vision to Reality
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-tight">
              From Concept to <span className="italic text-[#6EB8D0]">Creation</span>
            </h2>
          </RevealWrapper>
        </div>

        <RevealWrapper delay={0.2} className="max-w-5xl mx-auto">
          <div 
            ref={containerRef}
            className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-ew-resize select-none"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            {/* After Image (Full background) */}
            <div className="absolute inset-0">
              <Image 
                src="/images/expertise-architecture.png" 
                alt="Rendered result" 
                fill 
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <div className="absolute bottom-6 right-6 font-sans text-xs font-bold tracking-widest text-white drop-shadow-md">
                RENDER
              </div>
            </div>

            {/* Before Image (Clipped) */}
            <div 
              className="absolute inset-0" 
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <Image 
                src="/images/expertise-landscape.png" 
                alt="Initial Sketch/Concept" 
                fill 
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              {/* Overlay to simulate sketch/model look if needed */}
              <div className="absolute inset-0 bg-white/20 grayscale mix-blend-color" />
              <div className="absolute bottom-6 left-6 font-sans text-xs font-bold tracking-widest text-white drop-shadow-md">
                CONCEPT
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]"
              style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                <ChevronLeft className="w-5 h-5 text-black -mr-1" />
                <ChevronRight className="w-5 h-5 text-black -ml-1" />
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-white/50 mb-8">
              Drag to compare
            </p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
