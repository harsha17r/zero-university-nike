import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Use this folder as the project root. A stray package-lock.json in the home folder confuses detection.
  turbopack: { root: __dirname },
};

export default nextConfig;
