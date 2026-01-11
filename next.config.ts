import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: "/ai-ml-portfolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
