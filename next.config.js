/** @type {import('next').NextConfig} */
const nextConfig = {

    /* experimental: {
        appDir: true,
    },
 */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '',

            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                port: '',
            }
        ],
    },

}

module.exports = nextConfig
