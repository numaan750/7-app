/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  distDir: "build", // Prevent OneDrive link errors
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
