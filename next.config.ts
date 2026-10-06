import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sitemap v2 URLs all end in a slash (/home-extensions/second-storey/).
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
    deviceSizes: [640, 828, 1080, 1440, 1920, 2400],
  },
  async headers() {
    return [
      {
        source: "/videos/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
