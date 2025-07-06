/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
};

const path = require("path");

module.exports = {
  ...nextConfig,
  sassOptions: {
    includePaths: [path.join(__dirname, "app/styles")],
  } 
};
