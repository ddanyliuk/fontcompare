/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  "compilerOptions": {
    "paths": {
      "@/fonts": ["./styles/fonts"]
    }
  }
}

module.exports = nextConfig
