import { Metadata } from 'next';
import { readStore } from '@/lib/cms-store';

interface PageSEO {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
}

interface SEOStore {
  [key: string]: PageSEO;
}

const defaultSEO: SEOStore = {
  home: {
    title: "Space Node Architects | Structured · Styled · Sustained",
    description: "A multidisciplinary architectural and design practice delivering innovative and context-driven projects across India, UAE, USA, and Australia.",
    keywords: "architecture, interior design, landscape design, Kerala architects, Space Node, Cochin architecture",
    ogImage: "/images/project-kerala.png"
  },
  about: {
    title: "About Us | Space Node Architects",
    description: "Learn about Space Node Architects, our vision, purpose, and the collective of architects shaping our studio.",
    keywords: "about space node, architectural team, Jeffin Kuncheria Varghese, Jinsa Reji, architectural studio",
    ogImage: "/images/project-kochi.png"
  },
  expertise: {
    title: "Expertise | Space Node Architects",
    description: "Architecture, Interior Design, Landscape Design, and Project Management Services spanning residential, commercial, and hospitality projects.",
    keywords: "architectural services, interior design services, landscape design, project management, architecture consultation",
    ogImage: "/images/expertise-new-architecture.jpeg"
  },
  projects: {
    title: "Selected Works | Space Node Architects",
    description: "A curated collection of residential, commercial, and hospitality projects defined by architectural permanence and spatial clarity.",
    keywords: "architecture projects, portfolio, residential villas, commercial towers, hospitality retreats",
    ogImage: "/images/project-emirates.png"
  },
  products: {
    title: "Arte 'O' Node | Space Node Architects",
    description: "Bespoke architectural furniture, handcrafted design elements, and signature artifacts by Space Node Architects.",
    keywords: "Arte O Node, architectural products, designer furniture, custom artifacts",
    ogImage: "/images/aon-logo.jpg"
  },
  contact: {
    title: "Contact Us | Space Node Architects",
    description: "Start a journey with Space Node Architects. Contact our studio in Kaloor, Cochin, Kerala.",
    keywords: "contact architects, Cochin architect office, space node phone number, architecture consultation",
    ogImage: "/images/project-kerala.png"
  }
};

export function getPageMetadata(pageKey: string): Metadata {
  const store = readStore<SEOStore>('seo.json', defaultSEO);
  const data = store[pageKey] || defaultSEO[pageKey] || { title: 'Space Node Architects', description: '' };

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords ? data.keywords.split(',').map(k => k.trim()) : undefined,
    openGraph: {
      title: data.title,
      description: data.description,
      images: data.ogImage ? [{ url: data.ogImage }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.description,
      images: data.ogImage ? [data.ogImage] : undefined,
    },
  };
}
