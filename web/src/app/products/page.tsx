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
              <h1 className="font-serif text-5xl md:text-6xl text-[#161616] font-bold tracking-tight mb-8">
                arte 'O' node
              </h1>

              {/* Main Intro Paragraph - Black Text */}
              <p className="font-sans text-base md:text-lg text-[#161616] leading-relaxed max-w-3xl mb-8">
                We believe every space deserves a story. Through our signature approach—
                <span className="text-[#161616] font-semibold">Create · Curate · Craft · Connect</span>—
                <strong className="font-bold text-[#161616]">arte 'O' node</strong> transform houses into thoughtfully styled homes. From handpicked home décor products to personalized interior styling, we carefully select, style, and bring together every detail to create spaces that are timeless, functional, and uniquely yours.
              </p>

              {/* What We Offer Section */}
              <div className="mt-8">
                <h2 className="font-serif italic font-bold text-xl text-[#161616] mb-4">
                  What we offer
                </h2>
                <ul className="space-y-2.5 font-sans font-medium text-sm text-[#161616]">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#161616]" />
                    Personalized Interior Styling
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#161616]" />
                    Curated Home Décor
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#161616]" />
                    Furniture & Finish styling
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#161616]" />
                    Colour & Material Styling
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#161616]" />
                    Space Styling Consultation
                  </li>
                </ul>
              </div>
            </RevealWrapper>

            {/* AON Logo PNG Image */}
            <RevealWrapper delay={0.2} className="flex-shrink-0 self-start md:self-auto">
              <div className="w-36 h-36 md:w-44 md:h-44 relative flex items-center justify-center">
                <Image
                  src="/images/aon-logo-full.png"
                  alt="arte 'O' node AON logo"
                  width={180}
                  height={180}
                  className="object-contain"
                  priority
                />
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
