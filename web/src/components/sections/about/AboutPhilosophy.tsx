'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import RevealWrapper from '@/components/ui/RevealWrapper';

const philosophyNodes = [
  { id: 'context', label: 'Context', angle: 270, desc: 'Every project begins with a deep reading of its site, culture, and climate.' },
  { id: 'function', label: 'Function', angle: 330, desc: 'Form follows function — spaces that work intuitively for those who inhabit them.' },
  { id: 'experience', label: 'Experience', angle: 30, desc: 'Architecture is ultimately measured by the human experience it enables.' },
  { id: 'innovation', label: 'Innovation', angle: 90, desc: 'We push the boundaries of material, technology, and spatial thinking.' },
  { id: 'sustainability', label: 'Sustainability', angle: 150, desc: 'Buildings designed to endure and perform responsibly through time.' },
  { id: 'execution', label: 'Execution', angle: 210, desc: 'Uncompromising craft and attention to detail from concept to completion.' },
];

export default function AboutPhilosophy() {
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
