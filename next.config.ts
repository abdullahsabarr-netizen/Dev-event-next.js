import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript :{
 ignoreBuildErrors: true,
  },

  cacheComponents: true,
  partialPrefetching: true, // 👈 Yeh line add karni hai
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