/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
module.exports = withPlugins([], {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001",
        pathname: "/client/**",
      },
    ],
  },
});