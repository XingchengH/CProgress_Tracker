import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: { rules: {} }, // 可选：启用 Turbopack
  },
  async rewrites() {
    return [
      // 把 /api/* 转发到你现有的 backend（假设端口 3001）
      { source: '/api/:path*', destination: 'http://localhost:3001/:path*' },
    ];
  },
};
export default nextConfig;
