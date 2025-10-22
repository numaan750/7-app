/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // ✅ Allow Cloudinary images
    domains: ["res.cloudinary.com"],
  },
  // ✅ Prevent OneDrive link errors
  distDir: "build", 

  // (Optional but recommended)
  reactStrictMode: true,
};

export default nextConfig;
