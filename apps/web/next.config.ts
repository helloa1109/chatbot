import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  transpilePackages: ["@chatbot/ui", "@chatbot/langchain"],
};

export default nextConfig;
