import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, MapPin, Calendar, Tag } from 'lucide-react';
import RevealWrapper from '@/components/ui/RevealWrapper';
import NodeMesh from '@/components/ui/NodeMesh';
import { getProjectBySlug, getRelatedProjects, projects } from '@/lib/projects';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project.slug, project.category);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-end overflow-hidden" aria-label={`${project.name} hero`}>
        <Image
          src={project.heroImage || project.image}
          alt={project.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2333]/90 via-[#0A2333]/30 to-transparent" />
        <div className="absolute inset-0 opacity-20">
          <NodeMesh variant="hero" animated={false} />
        </div>

        {/* Back link */}
        <div className="absolute top-24 left-6 md:left-20 z-20">
          <Link href="/projects"
            className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.15em] uppercase text-white/60 hover:text-white transition-colors duration-300">
            <ArrowLeft size={13} /> All Projects
          </Link>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20 pb-16 w-full">
          <div className="flex flex-wrap gap-6 mb-6">
            <span className="flex items-center gap-1.5 font-sans text-[10px] tracking-[0.15em] uppercase text-[#6EB8D0]">
              <Tag size={11} /> {project.category}
            </span>
            <span className="flex items-center gap-1.5 font-sans text-[10px] tracking-[0.15em] uppercase text-white/50">
              <MapPin size={11} /> {project.location}
            </span>
            <span className="flex items-center gap-1.5 font-sans text-[10px] tracking-[0.15em] uppercase text-white/50">
              <Calendar size={11} /> {project.year}
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight tracking-[-0.01em]">
            {project.name}
          </h1>
        </div>
      </section>

      {/* Project Story */}
      <section className="py-32 md:py-40 bg-white" aria-label="Project story">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Description */}
            <div className="lg:col-span-5">
              <RevealWrapper>
                <p className="font-serif text-2xl text-[#161616] leading-relaxed">{project.description}</p>
              </RevealWrapper>
            </div>

            {/* Challenge / Approach / Solution */}
            <div className="lg:col-span-7 space-y-10">
              {[
                { label: 'The Challenge', content: project.challenge },
                { label: 'Our Approach', content: project.approach },
                { label: 'The Solution', content: project.solution },
              ].map((item, i) => (
                <RevealWrapper key={item.label} delay={i * 0.1}>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 pt-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#0D7A9E]" />
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-[11px] tracking-[0.2em] uppercase text-[#0D7A9E] mb-3">
                        {item.label}
                      </h3>
                      <p className="font-sans font-light text-base text-[#6B7280] leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                  {i < 2 && <div className="mt-10 ml-8 w-px h-8 bg-[#E5E7EB]" />}
                </RevealWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="bg-[#F8F9FA] py-2" aria-label="Project gallery">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {project.gallery.map((img, i) => (
              <RevealWrapper key={i} delay={i * 0.1} className={i === 0 ? 'md:col-span-2' : ''}>
                <div className={`relative overflow-hidden ${i === 0 ? 'h-[60vh]' : 'h-[50vh]'}`}>
                  <Image
                    src={img}
                    alt={`${project.name} — view ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </RevealWrapper>
            ))}
          </div>
        </section>
      )}

      {/* Concept Diagram */}
      <section className="py-32 md:py-40 bg-white overflow-hidden relative" aria-label="Concept diagram">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <RevealWrapper className="text-center mb-16">
            <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-[#0D7A9E] block mb-4">
              Concept
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#161616]">
              Architectural <span className="italic">Logic</span>
            </h2>
          </RevealWrapper>

          <RevealWrapper delay={0.1} className="flex justify-center">
            <svg viewBox="0 0 200 120" className="w-full max-w-2xl" xmlns="http://www.w3.org/2000/svg">
              {/* Central concept */}
              <rect x="75" y="45" width="50" height="30" fill="none" stroke="#0D7A9E" strokeWidth="0.8" opacity="0.8"/>
              <text x="100" y="58" textAnchor="middle" fontSize="5" fontFamily="'Playfair Display', serif" fill="#0D7A9E">
                {project.name.split(' ').slice(0, 2).join(' ')}
              </text>
              <text x="100" y="66" textAnchor="middle" fontSize="3.5" fontFamily="'Hanken Grotesk', sans-serif" fill="#6B7280">
                {project.category}
              </text>

              {/* Satellite concepts */}
              {['Context', 'Function', 'Light', 'Material'].map((concept, i) => {
                const angles = [315, 45, 135, 225];
                const rad = (angles[i] * Math.PI) / 180;
                const r = 42;
                const nx = 100 + r * Math.cos(rad);
                const ny = 60 + r * Math.sin(rad);
                return (
                  <g key={concept}>
                    <line x1={100} y1={60} x2={nx} y2={ny}
                      stroke="#6EB8D0" strokeWidth="0.4" strokeDasharray="2 2" opacity="0.5"/>
                    <circle cx={nx} cy={ny} r="2" fill="#0D7A9E" opacity="0.7">
                      <animate attributeName="r" values="2;3;2" dur={`${2 + i * 0.3}s`} repeatCount="indefinite"/>
                    </circle>
                    <text x={nx} y={ny - 4} textAnchor="middle" fontSize="4"
                      fontFamily="'Hanken Grotesk', sans-serif" fill="#6B7280">
                      {concept}
                    </text>
                  </g>
                );
              })}
            </svg>
          </RevealWrapper>
        </div>
      </section>

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="py-24 bg-[#F8F9FA]" aria-label="Related projects">
          <div className="max-w-[1440px] mx-auto px-6 md:px-20">
            <RevealWrapper className="flex items-center justify-between mb-12">
              <h2 className="font-serif text-3xl text-[#161616]">
                Related <span className="italic">Works</span>
              </h2>
              <Link href="/projects"
                className="hidden md:flex items-center gap-1.5 group font-sans text-[11px] font-semibold tracking-[0.15em] uppercase text-[#0D7A9E] border-b border-[#0D7A9E] pb-1">
                View All <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </RevealWrapper>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <RevealWrapper key={p.id} delay={i * 0.1}>
                  <Link href={`/projects/${p.slug}`} className="group block">
                    <div className="overflow-hidden aspect-[4/3] mb-4 relative">
                      <Image src={p.image} alt={p.name} fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <h3 className="font-serif text-xl text-[#161616] group-hover:text-[#0D7A9E] transition-colors duration-300 mb-1">{p.name}</h3>
                    <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-[#6B7280]">{p.location}</p>
                  </Link>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
