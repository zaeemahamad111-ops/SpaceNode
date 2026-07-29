import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import RevealWrapper from '@/components/ui/RevealWrapper';
import NodeMesh from '@/components/ui/NodeMesh';
import { products } from '@/data/products';
import { getPageMetadata } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return getPageMetadata('products');
}

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-[#F8F9FA] overflow-hidden" aria-label="Arte O Node hero">
        <div className="absolute right-0 inset-y-0 w-1/2 opacity-10 pointer-events-none">
          <NodeMesh variant="hero" animated={false} />
        </div>
        
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-10">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
            <RevealWrapper className="flex-1">
              <h1 className="font-serif text-5xl md:text-6xl text-[#B84028] font-bold tracking-tight mb-8">
                arte 'O' node
              </h1>

              {/* Main Intro Paragraph */}
              <p className="font-sans font-light text-base md:text-lg text-[#333333] leading-relaxed max-w-3xl mb-8">
                We believe every space deserves a story. Through our signature approach—
                <span className="text-[#B84028] font-semibold">Create · Curate · Craft · Connect</span>—
                <strong className="font-semibold text-[#161616]">arte 'O' node</strong> transform houses into thoughtfully styled homes. From handpicked home décor products to personalized interior styling, we carefully select, style, and bring together every detail to create spaces that are timeless, functional, and uniquely yours.
              </p>

              {/* What We Offer Section */}
              <div className="mt-8">
                <h2 className="font-serif italic font-bold text-xl text-[#161616] mb-4">
                  What we offer
                </h2>
                <ul className="space-y-2 font-sans font-normal text-sm text-[#444444]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B84028]" />
                    Personalized Interior Styling
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B84028]" />
                    Curated Home Décor
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B84028]" />
                    Furniture & Finish styling
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B84028]" />
                    Colour & Material Styling
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B84028]" />
                    Space Styling Consultation
                  </li>
                </ul>
              </div>
            </RevealWrapper>

            {/* AON Circular Logo Badge */}
            <RevealWrapper delay={0.2} className="flex-shrink-0 self-start md:self-auto">
              <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-[#FAF8F5] border border-[#E8E2D9] p-4 flex flex-col items-center justify-center text-center shadow-sm hover:scale-105 transition-transform duration-300">
                <span className="font-sans text-[9px] tracking-widest text-[#666666] uppercase mb-0.5">
                  arte 'O' node
                </span>
                <span className="font-serif text-3xl md:text-4xl font-bold tracking-tighter text-[#161616] leading-none">
                  AON
                </span>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-white border-t border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <RevealWrapper key={product.id} delay={i * 0.08}>
                <Link href={`/products/${product.slug}`} className="group flex flex-col border border-[#161616] p-3 bg-white hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/3] mb-4 overflow-hidden bg-[#F5F2ED]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="pt-2 pb-1">
                    <h3 className="font-sans text-sm font-medium text-[#B84028] group-hover:underline">
                      {product.name}
                    </h3>
                  </div>
                </Link>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
