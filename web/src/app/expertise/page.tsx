import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import RevealWrapper from '@/components/ui/RevealWrapper';
import NodeMesh from '@/components/ui/NodeMesh';

export const metadata: Metadata = {
  title: 'Expertise',
  description:
    'Architecture, Interior Design, Landscape Design, and Project Consultancy — Space Node\'s areas of expertise spanning residential, commercial, and hospitality projects.',
};

const services = [
  {
    id: 'architecture',
    num: '01',
    title: 'Architectural Design Services',
    shortTitle: 'Architecture',
    subtitle: 'Residential & Private Estates · Commercial & Office Spaces · Hospitality & Mixed-Use',
    description:
      'We provide end-to-end architectural design solutions—from concept development and planning to technical drawings, approvals, and execution support. By combining thoughtful design, technical precision, and functional planning, we create spaces that are timeless, practical, and aligned with each client’s vision.',
    image: '/images/expertise-architecture.png',
    href: '/projects?category=Residential',
    reversed: false,
  },
  {
    id: 'interior',
    num: '02',
    title: 'Interior design services',
    shortTitle: 'Interior Design',
    subtitle: 'Thoughtful interiors that reflect personality',
    description:
      'At Space Node Architects, we create thoughtfuly designed interiors that balance aesthetics, comfort, and functionality. Our approach focuses on transforming spaces into environments that reflect the client\'s lifestyle, personality, and practical needs while maintaining timeless design appeal. We ensure every element is carefully considered to create cohesive, elegant, and functional interiors that enhance everyday living and working experiences.',
    image: '/images/expertise-interior.png',
    href: '/projects',
    reversed: true,
  },
  {
    id: 'landscape',
    num: '03',
    title: 'Landscape Design Services',
    shortTitle: 'Landscape Design',
    subtitle: 'Outdoor spaces that connect architecture with nature',
    description:
      'We create thoughtfully designed outdoor environments that enhance the beauty and functionality of a space. From site planning and planting concepts to outdoor living areas and material selection, we design landscapes that harmoniously connect architecture and nature. We believe landscape design completes a project—transforming spaces into a well-balanced and enriching living atmosphere.',
    image: '/images/expertise-landscape.png',
    href: '/projects?category=Landscape',
    reversed: false,
  },
  {
    id: 'consultancy',
    num: '04',
    title: 'Project Management Service',
    shortTitle: 'Project Management',
    subtitle: 'Strategic guidance and expert management',
    description:
      'Project management is one of our core strengths—especially for clients residing abroad or who require trusted on-ground coordination. Acting as the client’s representative, we oversee every stage of the project, from design coordination and vendor selection to procurement, budgeting, execution, and final handover. By collaborating with specialized contractors and vendors for each scope of work, we ensure superior quality, cost transparency, and timely delivery while maintaining the integrity of the design. Through regular updates, quality checks, and seamless coordination, we provide a stress-free experience—allowing clients to stay confident and informed, no matter where they are.',
    image: '/images/expertise-consultancy.png',
    href: '/contact',
    reversed: true,
  },
];

const processSteps = [
  { num: '01', title: 'Discover', desc: 'Site analysis, client brief, contextual research, precedent studies.' },
  { num: '02', title: 'Design', desc: 'Concept development, spatial planning, material palette, design intent.' },
  { num: '03', title: 'Develop', desc: 'Technical drawings, consultants coordination, regulatory approvals.' },
  { num: '04', title: 'Deliver', desc: 'Construction oversight, quality control, handover, post-occupancy.' },
];

export default function ExpertisePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-[#F8F9FA] overflow-hidden" aria-label="Expertise hero">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealWrapper>
              <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-[#0D7A9E] block mb-6">
                What We Do
              </span>
              <h1 className="font-serif text-6xl md:text-7xl text-[#161616] leading-[1.05] tracking-[-0.02em] mb-6">
                What<br />We <span className="italic text-[#0D7A9E]">Do.</span>
              </h1>
              <p className="font-sans font-light text-lg text-[#6B7280] leading-relaxed max-w-sm">
                Architecture, Interiors and Landscapes designed to endure through material honesty and spatial clarity.
              </p>
            </RevealWrapper>
            <RevealWrapper delay={0.2} direction="right" className="relative h-[500px] overflow-hidden">
              <Image
                src="/images/expertise-architecture.png"
                alt="Space Node architecture — premium contemporary building"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 opacity-20">
                <NodeMesh variant="section" animated={false} />
              </div>
            </RevealWrapper>
          </div>

          {/* Service tabs */}
          <RevealWrapper delay={0.3} className="mt-16 flex flex-wrap gap-0 border-t border-[#E5E7EB]">
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`}
                className="group flex-1 min-w-[140px] py-6 px-4 border-r border-[#E5E7EB] last:border-r-0 text-center hover:bg-white transition-colors duration-300">
                <div className="font-sans text-[10px] tracking-[0.15em] uppercase text-[#0D7A9E] mb-1">{s.num}</div>
                <div className="font-serif text-base text-[#161616] group-hover:text-[#0D7A9E] transition-colors duration-300">{s.shortTitle || s.title}</div>
              </a>
            ))}
          </RevealWrapper>
        </div>
      </section>

      {/* Service Showcases */}
      {services.map((service) => (
        <section key={service.id} id={service.id} className={`py-24 md:py-32 overflow-hidden ${service.reversed ? 'bg-[#F8F9FA]' : 'bg-white'}`}>
          <div className="max-w-[1440px] mx-auto px-6 md:px-20">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${service.reversed ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <RevealWrapper
                direction={service.reversed ? 'right' : 'left'}
                className={`relative h-[450px] md:h-[550px] overflow-hidden ${service.reversed ? 'lg:col-start-2' : ''}`}
              >
                <Image
                  src={service.image}
                  alt={`Space Node ${service.title}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </RevealWrapper>

              {/* Content */}
              <div className={service.reversed ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <RevealWrapper>
                  <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-[#0D7A9E] block mb-4">
                    {service.num}
                  </span>
                  <h2 className="font-serif text-4xl md:text-5xl text-[#161616] leading-tight mb-4">
                    {service.title}
                  </h2>
                  <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-[#6B7280] mb-6">
                    {service.subtitle}
                  </p>
                  <p className="font-sans font-light text-base text-[#6B7280] leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-2 font-sans text-[11px] font-semibold tracking-[0.15em] uppercase text-[#0D7A9E] border-b border-[#0D7A9E] pb-1 hover:text-[#0A2333] hover:border-[#0A2333] transition-all duration-300"
                  >
                    View Projects <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </RevealWrapper>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-32 md:py-40 bg-[#0A2333] overflow-hidden relative" aria-labelledby="process-heading">
        <div className="absolute inset-0 opacity-20">
          <NodeMesh variant="footer" animated={true} />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20">
          <RevealWrapper className="text-center mb-20">
            <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-[#0D7A9E] block mb-4">
              Our Process
            </span>
            <h2 id="process-heading" className="font-serif text-4xl md:text-5xl text-white">
              How We <span className="italic text-[#6EB8D0]">Work</span>
            </h2>
          </RevealWrapper>

          {/* Node-driven timeline */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 relative">
            {/* Connection line */}
            <div className="absolute top-6 left-0 right-0 h-px bg-[#0D7A9E]/30 hidden md:block" />

            {processSteps.map((step, i) => (
              <RevealWrapper key={step.num} delay={i * 0.12}>
                <div className="relative text-center px-4 pb-8">
                  {/* Node on timeline */}
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className="w-12 h-12 rounded-full border-2 border-[#0D7A9E] bg-[#0A2333] flex items-center justify-center relative z-10">
                      <span className="font-sans text-[10px] font-semibold tracking-[0.15em] text-[#0D7A9E]">{step.num}</span>
                    </div>
                    <div className="absolute w-12 h-12 rounded-full bg-[#0D7A9E]/20 animate-ping" style={{ animationDuration: `${3 + i * 0.5}s` }} />
                  </div>

                  <h3 className="font-serif text-2xl text-white mb-3">{step.title}</h3>
                  <p className="font-sans font-light text-sm text-white/50 leading-relaxed">{step.desc}</p>

                  {/* Arrow between steps */}
                  {i < processSteps.length - 1 && (
                    <div className="absolute top-5 -right-3 md:block hidden z-20">
                      <ArrowRight size={16} className="text-[#0D7A9E]" />
                    </div>
                  )}
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-[#F8F9FA]" aria-label="Expertise CTA">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 text-center">
          <RevealWrapper>
            <h2 className="font-serif text-4xl md:text-6xl text-[#161616] leading-tight mb-10">
              Let's Build Something<br />
              <span className="italic text-[#0D7A9E]">Exceptional</span>.
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-[#0D7A9E] text-white px-10 py-5 font-sans text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#0A2333] transition-all duration-300"
            >
              Book Consultation
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </RevealWrapper>
        </div>
      </section>
    </>
  );
}
