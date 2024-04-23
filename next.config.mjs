/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "picsum.photos",
      },
      {
        hostname: "i.imgur.com",
      },
    ],
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
