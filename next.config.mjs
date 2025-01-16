/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['miro.medium.com'],
        deviceSizes: [640, 750, 828, 1080, 1200],
        imageSizes: [16, 32, 48, 64, 96, 128, 256],
        formats: ['image/webp'],
        minimumCacheTTL: 60,
    },
    experimental: {
        optimizeCss: true,
        optimizeServerComponents: true,
    },
};

export default nextConfig;
