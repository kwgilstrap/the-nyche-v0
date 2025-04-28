import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  
  output: 'standalone',
  
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
  
  // Configure external packages
  experimental: {
    serverComponentsExternalPackages: ['gray-matter']
  },
  
  webpack: (config, { isServer }) => {
    // Add markdown loader
    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: 'raw-loader',
          options: {
            esModule: false
          }
        }
      ]
    });
    
    return config;
  }
}

export default {
  ...nextConfig,
  webpack(config, options) {
    // Call the existing webpack config function
    config = nextConfig.webpack ? nextConfig.webpack(config, options) : config;
    
    // Add path alias
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
}