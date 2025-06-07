/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['miro.medium.com'], 
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60 * 60 * 24 * 365, // 1 yıl cache
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        unoptimized: false,
        loader: 'default',
        loaderFile: undefined,
        disableStaticImages: false,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'miro.medium.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    // Genel performans optimizasyonları
    experimental: {
        optimizeCss: true,
        optimizePackageImports: ['framer-motion', '@heroicons/react'],
    },
    // Statik dosyalar için cache headers
    async headers() {
        return [
            {
                source: '/:all*(svg|jpg|jpeg|png|gif|webp|avif|ico)',
                locale: false,
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable'
                    }
                ],
            },
        ]
    },
    // Compression
    compress: true,
    
    // Asset optimization
    webpack: (config, { dev, isServer }) => {
        if (!dev && !isServer) {
            config.optimization.splitChunks.cacheGroups.images = {
                name: 'images',
                test: /\.(gif|png|jpe?g|svg|webp|avif)$/i,
                chunks: 'all',
                enforce: true,
            };
        }
        return config;
    },
};

export default nextConfig;
