/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/writers", destination: "/about#contributors", permanent: true },
    ];
  },
};

export default nextConfig;
