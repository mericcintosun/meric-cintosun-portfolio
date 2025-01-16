/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828],
        imageSizes: [16, 32, 48, 64],
        minimumCacheTTL: 60 * 60 * 24 * 7, // 7 gün cache
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
                '*.svg': ['@svgr/webpack'],
            }
        },
        optimizePackageImports: ['@heroicons/react', 'date-fns', 'lodash-es'],
    },
    webpack: (config, { dev, isServer }) => {
        if (!dev && !isServer) {
            config.optimization = {
                ...config.optimization,
                splitChunks: {
                    chunks: 'all',
                    minSize: 20000,
                    maxSize: 50000,
                    minChunks: 1,
                    maxAsyncRequests: 30,
                    maxInitialRequests: 30,
                    cacheGroups: {
                        defaultVendors: false,
                        framework: {
                            chunks: 'all',
                            name: 'framework',
                            test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
                            priority: 40,
                            enforce: true,
                        },
                        commons: {
                            name: 'commons',
                            chunks: 'initial',
                            minChunks: 2,
                            priority: 20,
                        },
                        lib: {
                            test: /[\\/]node_modules[\\/]/,
                            chunks: 'initial',
                            name: 'lib',
                            priority: 10,
                        },
                    },
                },
            }
        }
        return config
    },
}

export default nextConfig;
