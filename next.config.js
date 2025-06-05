/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // assetPrefix: './', // <-- 删除或注释掉这一行
};

module.exports = nextConfig;
