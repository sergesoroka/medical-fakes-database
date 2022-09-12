/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['voxukraine.org', 'scontent.fiev6-1.fna.fbcdn.net'],
  },
  i18n: {
    locales: ["en", "it", "de", 'ua', 'ru'],
    defaultLocale: "ua",
    localeDetection: false,
  },
}

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
}
module.exports = nextConfig
