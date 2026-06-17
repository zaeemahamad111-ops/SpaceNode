import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import RevealWrapper from '@/components/ui/RevealWrapper';
import { products } from '@/data/products';

// This generates static paths at build time for all products
export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <section className="pt-32 pb-20 bg-white min-h-[90vh] flex items-center">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 w-full">
          {/* Back link */}
          <RevealWrapper>
            <Link href="/products" className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.2em] uppercase text-[#6B7280] hover:text-[#0D7A9E] transition-colors duration-300 mb-12">
              <ArrowLeft size={14} /> Back to Products
            </Link>
          </RevealWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image Gallery (Placeholder for just 1 image) */}
            <RevealWrapper delay={0.1}>
              <div className="relative aspect-square w-full bg-[#F8F9FA] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </RevealWrapper>

            {/* Product Info */}
            <RevealWrapper delay={0.2} direction="right">
              <div className="sticky top-32">
                <h1 className="font-serif text-4xl md:text-5xl text-[#161616] leading-tight mb-6">
                  {product.name}
                </h1>
                
                <div className="h-px w-full bg-[#E5E7EB] my-8" />
                
                <h2 className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#0D7A9E] mb-3">
                  Design Intent
                </h2>
                <p className="font-sans font-light text-base text-[#6B7280] leading-relaxed mb-12 max-w-md">
                  {product.description}
                </p>

                {/* Inquiry Form Placeholder */}
                <div className="bg-[#F8F9FA] p-8 border border-[#E5E7EB]">
                  <h3 className="font-sans text-[11px] font-semibold tracking-[0.15em] uppercase text-[#161616] mb-6">
                    Inquire About This Piece
                  </h3>
                  <a href={`mailto:enquiries@spacenodearchitects.in?subject=Inquiry about ${product.name}`}
                    className="group inline-flex items-center justify-center w-full gap-3 bg-[#0A2333] text-white px-8 py-4 font-sans text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#0D7A9E] transition-all duration-300">
                    Contact Studio
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>
    </>
  );
}
