/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol:"https",
                hostname:"images.unsplash.com",
                pathname: "/**"
            },
            {
                protocol:"http",
                hostname:"images.restapi.co.za",
                pathname: "/**"
            }
        ]
    }
};

export default nextConfig;
