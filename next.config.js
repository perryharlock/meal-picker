/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const isProd = process.env.NODE_ENV === 'production';
const assetPrefix = isProd ? '/meal-picker/' : '';

module.exports = {
  nextConfig,
  assetPrefix
}