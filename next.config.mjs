/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    sassOptions: {
        additionalData: '@import "@/style/variables.scss";',
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'qncdn.mopic.mozigu.net',
            },
        ],
    },
};

export default nextConfig;
