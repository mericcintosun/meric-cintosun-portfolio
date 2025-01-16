/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['miro.medium.com'],
        deviceSizes: [640, 750, 828, 1080, 1200],
        imageSizes: [16, 32, 48, 64, 96, 128, 256],
        formats: ['image/webp'],
        minimumCacheTTL: 60,
    },
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    poweredByHeader: false,
    compress: true,
    productionBrowserSourceMaps: false,
    optimizeFonts: true,
};

export default nextConfig;
