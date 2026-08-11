import RevealWrapper from '@/components/ui/RevealWrapper';

const processes = [
  {
    num: '01',
    title: 'Dialogue',
    desc: 'Understanding the client’s vision, the context of the site, and the environmental nuances.'
  },
  {
    num: '02',
    title: 'Concept',
    desc: 'Translating ideas into spatial logic, focusing on form, light, and material purity.'
  },
  {
    num: '03',
    title: 'Execution',
    desc: 'Rigorous detailing and on-ground coordination to ensure the design intent is fully realized.'
  }
];

export default function StudioProcess() {
  return (
    <section className="py-24 md:py-32 bg-[#F8F9FA] relative overflow-hidden" aria-label="Our process">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24">
          <RevealWrapper>
            <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-[#0D7A9E] block mb-6">
              Our Methodology
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-[#161616] leading-[1.05] tracking-[-0.02em]">
              The Studio <span className="italic text-[#0D7A9E]">Process</span>.
            </h2>
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {processes.map((proc, i) => (
            <RevealWrapper key={proc.num} delay={i * 0.15}>
              <div className="relative pt-8 border-t border-[#0D7A9E]">
                <div className="absolute top-0 right-0 transform -translate-y-1/2 bg-[#F8F9FA] px-2">
                  <span className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-[#0D7A9E]">
                    {proc.num}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-[#161616] mb-4">
                  {proc.title}
                </h3>
                <p className="font-sans font-light text-sm text-[#6B7280] leading-relaxed">
                  {proc.desc}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
