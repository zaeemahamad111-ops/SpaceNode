// lib/projects.ts

export interface Project {
  id: string;
  slug: string;
  name: string;
  location: string;
  year: string;
  category: 'Residential' | 'Commercial' | 'Hospitality' | 'Landscape' | 'Mixed Use';
  type: string;
  image: string;
  heroImage?: string;
  description: string;
  challenge: string;
  approach: string;
  solution: string;
  featured: boolean;
  gallery?: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'kerala-residence',
    name: 'The Kerala Residence',
    location: 'Cochin, Kerala, India',
    year: '2024',
    category: 'Residential',
    type: 'Residential / Architecture',
    image: '/images/project-kerala.png',
    heroImage: '/images/project-kerala.png',
    description: 'A contemporary residence that reimagines Kerala\'s vernacular architecture through the lens of modern spatial thinking.',
    challenge: 'Creating a home that honors Kerala\'s rich architectural heritage while delivering the spatial quality and material refinement expected by a discerning contemporary client.',
    approach: 'We studied traditional Kerala nalukettu typologies — their courtyard geometry, shaded verandahs, and layered thresholds — and distilled their spatial logic into a contemporary language using laterite stone, concrete, and glass.',
    solution: 'The result is a 4,800 sq ft residence organized around a central courtyard with a mature rain tree. Shaded overhangs reduce solar gain while framing views of the landscape. The material palette connects the building to its site.',
    featured: true,
    gallery: ['/images/project-kerala.png', '/images/expertise-interior.png'],
  },
  {
    id: '2',
    slug: 'kochi-commerce-hub',
    name: 'Kochi Commerce Hub',
    location: 'Kochi, Kerala, India',
    year: '2023',
    category: 'Commercial',
    type: 'Commercial / Architecture',
    image: '/images/project-kochi.png',
    heroImage: '/images/project-kochi.png',
    description: 'A landmark commercial tower that redefines Kochi\'s skyline with its distinctive dark glass curtain wall and structural expression.',
    challenge: 'Designing a commercially efficient office tower that achieves architectural distinction in a city rapidly evolving its identity.',
    approach: 'The tower\'s facade is articulated as a series of staggered bays that reduce solar gain on the east and west elevations while maximizing views of the backwaters from key office floors.',
    solution: 'The 22-storey tower provides 180,000 sq ft of premium Grade-A office space, with a public plaza at ground level that integrates the building with its urban context.',
    featured: true,
    gallery: ['/images/project-kochi.png', '/images/expertise-architecture.png'],
  },
  {
    id: '3',
    slug: 'emirates-desert-retreat',
    name: 'Emirates Desert Retreat',
    location: 'Dubai, UAE',
    year: '2023',
    category: 'Hospitality',
    type: 'Hospitality / Architecture',
    image: '/images/project-emirates.png',
    heroImage: '/images/project-emirates.png',
    description: 'A private desert retreat that emerges from the landscape as a series of white geometric volumes, minimizing its visual presence while maximizing spatial drama.',
    challenge: 'Designing a luxury retreat for the UAE desert that performs climatically without sacrificing architectural ambition.',
    approach: 'The massing is oriented to capture prevailing north winds and provide shade during peak summer. Heavy masonry walls moderate temperature swings, while shaded loggia extend the habitable area outdoors.',
    solution: 'Six interconnected pavilions house the retreat\'s program — private suites, spa, dining, and infinity pool — organized around a shaded courtyard that becomes the social heart of the complex.',
    featured: true,
    gallery: ['/images/project-emirates.png', '/images/expertise-landscape.png'],
  },
  {
    id: '4',
    slug: 'forest-retreat-munnar',
    name: 'Forest Retreat, Munnar',
    location: 'Munnar, Kerala, India',
    year: '2024',
    category: 'Hospitality',
    type: 'Hospitality / Architecture',
    image: '/images/project-forest.png',
    heroImage: '/images/project-forest.png',
    description: 'A boutique eco-resort that nestles into the tea plantation landscape of Munnar with minimal disruption to the forest ecosystem.',
    challenge: 'Creating a luxury hospitality experience in a sensitive ecological zone while maintaining the authenticity and tranquility that draws visitors to Munnar.',
    approach: 'Buildings are sited on existing clearings and elevated on minimal concrete footings to preserve root systems. Dark cladding allows the buildings to recede into the forest landscape.',
    solution: 'Ten individual guest pavilions connected by elevated walkways, each oriented for privacy and forest views. The main lodge is partially built into the hillside to reduce visual impact.',
    featured: false,
    gallery: ['/images/project-forest.png'],
  },
  {
    id: '5',
    slug: 'urban-courtyard-villa',
    name: 'Urban Courtyard Villa',
    location: 'Bangalore, Karnataka, India',
    year: '2022',
    category: 'Residential',
    type: 'Residential / Interior Design',
    image: '/images/expertise-interior.png',
    heroImage: '/images/expertise-interior.png',
    description: 'An urban villa that creates a private sanctuary within the density of Bangalore through a series of interlocked courtyards.',
    challenge: 'Designing a family home in a dense urban neighborhood that achieves privacy, natural light, and connection to outdoor space within a constrained plot.',
    approach: 'Rather than a single large courtyard, we created a sequence of smaller outdoor spaces — an entry garden, a living courtyard, and a private plunge pool — that draw light and air deep into the plan.',
    solution: 'The 6,200 sq ft home achieves a sense of spaciousness despite its urban condition through the choreography of space, light, and material. Every room has a direct connection to one of the courtyards.',
    featured: false,
    gallery: ['/images/expertise-interior.png'],
  },
  {
    id: '6',
    slug: 'landscape-sanctuary',
    name: 'The Landscape Sanctuary',
    location: 'Thrissur, Kerala, India',
    year: '2024',
    category: 'Landscape',
    type: 'Landscape / Design',
    image: '/images/expertise-landscape.png',
    heroImage: '/images/expertise-landscape.png',
    description: 'A 3-acre residential landscape that creates an immersive natural environment framing views of the Western Ghats.',
    challenge: 'Designing a landscape that feels both curated and wild — a cultivated naturalness that enhances rather than domesticates the dramatic site.',
    approach: 'Using a palette of native Kerala plants organized in ecological guilds that mimic natural forest communities, creating a landscape that requires minimal maintenance and supports local biodiversity.',
    solution: 'The landscape unfolds as a journey from the formal entry sequence through a meadow garden to a naturalistic grove overlooking the valley. A geometric reflecting pool bridges the formal and informal zones.',
    featured: false,
    gallery: ['/images/expertise-landscape.png'],
  },
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectBySlug = (slug: string) => projects.find(p => p.slug === slug);
export const getRelatedProjects = (currentSlug: string, category: string) => 
  projects.filter(p => p.slug !== currentSlug && p.category === category).slice(0, 3);

export type ProjectCategory = 'All Projects' | 'Residential' | 'Commercial' | 'Hospitality' | 'Landscape' | 'Mixed Use';
