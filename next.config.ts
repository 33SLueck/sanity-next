import type { NextConfig } from "next";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig: NextConfig = {
  turbopack: {
    // point Turbopack at this project root to avoid scanning /home/sven
    root: __dirname,
  },
  /* config options here */
};

export default nextConfig;
