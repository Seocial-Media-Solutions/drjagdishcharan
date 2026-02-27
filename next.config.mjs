/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  compress: true,
  images: {
    unoptimized: true,
  },
  
};

export default nextConfig;
