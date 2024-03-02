/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => [
    // Order matters here! The first matching rewrite is used.
    {
      source: "/components",
      destination: "/storybook/index.html",
    },
    {
      source: "/iframe.html",
      destination: "/storybook/iframe.html",
    },
    {
      source: "/:path*",
      destination: "/storybook/:path*",
    },
  ],
};

export default nextConfig;
