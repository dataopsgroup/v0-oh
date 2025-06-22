/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build optimization
  reactStrictMode: true,
  swcMinify: true,
  
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  
  // Image optimization
  images: {
    unoptimized: true,
    domains: ['blob.v0.dev', 'dataopsgroup.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
    ]
  },
  
  // Build configuration
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // Output configuration for deployment
  output: 'standalone',
  
  // Experimental features
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
}

export default nextConfig
