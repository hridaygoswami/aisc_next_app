/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  trailingSlash: true, // Ensures each page has an index.html file
  images: {
    unoptimized: true, // Disable Next.js image optimization (use standard <img>)
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com"],
  },
};

module.exports = nextConfig;
