/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200],
        imageSizes: [16, 32, 48, 64, 96, 128],
        minimumCacheTTL: 60 * 60 * 24, // 24 saat cache
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    poweredByHeader: false,
    compress: true,
    productionBrowserSourceMaps: false,
    experimental: {
        optimizeCss: true,
        webVitalsAttribution: ['CLS', 'LCP'],
        turbo: {
            rules: {
                // Turbo'nun build sürecini hızlandırmak için kurallar
                '*.svg': ['@svgr/webpack'],
            }
        }
    },
};

export default nextConfig;
