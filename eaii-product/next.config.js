/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    baseUrl: 'http://localhost:8080/v1/graphql'
  },
  eslint: {
    ignoreDuringBuilds: true,
},
}

module.exports = nextConfig
