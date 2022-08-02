/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    SHOPIFY_STOREFRONT_ACCESSTOKEN: process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN,
    SHOPIFY_ADMIN_ACCESSTOKEN: process.env.SHOPIFY_ADMIN_ACCESSTOKEN,
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
  },
  images: {
    domains: ["cdn.shopify.com"],
  },
};

module.exports = nextConfig;
