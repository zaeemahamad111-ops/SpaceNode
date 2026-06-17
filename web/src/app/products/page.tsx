import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import RevealWrapper from '@/components/ui/RevealWrapper';
import NodeMesh from '@/components/ui/NodeMesh';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Products | Space Node Architects',
  description: 'Curated architectural products and bespoke furniture by Space Node.',
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-36 pb-16 bg-[#F8F9FA] overflow-hidden" aria-label="Products hero">
        <div className="absolute right-0 inset-y-0 w-1/2 opacity-10 pointer-events-none">
          <NodeMesh variant="hero" animated={false} />
        </div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-10">
          <RevealWrapper>
            <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-[#0D7A9E] block mb-6">
              Bespoke Design
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-[#161616] leading-[1.05] tracking-[-0.02em]">
              Our <span className="italic text-[#0D7A9E]">Products</span>
            </h1>
          </RevealWrapper>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <RevealWrapper key={product.id} delay={i * 0.1}>
                <Link href={`/products/${product.slug}`} className="group flex flex-col h-full border border-[#E5E7EB] hover:border-[#0D7A9E] transition-colors duration-300 p-4">
                  <div className="relative aspect-[4/3] mb-5 overflow-hidden bg-[#F8F9FA]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <h3 className="font-sans text-[11px] font-semibold tracking-[0.15em] uppercase text-[#161616] mb-3 leading-loose">
                    {product.name}
                  </h3>
                  <p className="font-sans font-light text-xs text-[#6B7280] leading-relaxed mt-auto">
                    {product.description}
                  </p>
                </Link>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
