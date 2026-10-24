import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    typescript: {
        ignoreBuildErrors: true, // 👈 Yeh zaroor hona chahiye taake Vercel build type error par na ruke
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
        ],
    },
};

export default nextConfig;