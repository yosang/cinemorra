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
            },
            {
                protocol:"https",
                hostname:"picsum.photos",
                pathname: "/**"
            }
        ]
    }
};

export default nextConfig;

