/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const path = require("path");

module.exports = {
  // useFileSystemPublicRoutes: false,
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  sassOptions: {
    includePaths: [path.join("./jss")],
  },
  images: {
    domains: ["images.unsplash.com", "cdn.discordapp.com"],
  },
  reactStrictMode: true,
};
