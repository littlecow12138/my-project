/**
 * @type {import('next').NextConfig}
 */
// const withCss = require("@zeit/next-css")
const nextConfig = {
  images: {
    loader: "default",
    domains: ["localhost"],
  },
}

module.exports = nextConfig
// module.exports = withCss({})
