/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  images: { // ← yahan 'images' hona chahiye
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
