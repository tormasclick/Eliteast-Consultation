import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eliteast.tormasclick.co.ke",
        pathname: "/**", // This allows all images from the domain; adjust if needed
      },
    ],
  },
  // Other configuration options
};

export default nextConfig;