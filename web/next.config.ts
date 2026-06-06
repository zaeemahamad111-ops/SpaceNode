import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  // Ignore TypeScript errors in build for now
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
