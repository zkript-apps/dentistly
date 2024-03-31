/** @type {import("next").NextConfig} */
require("dotenv").config({
  path: "../../.env",
});

module.exports = {
  // Before you can use env vars in this NextJS project,
  // you need to add all of it in the env object below.
  // Ex: MONGO_URL: process.env.MONGO_URL
  async rewrites() {
    return [
      {
        source: "/assets/:path*",
        destination: `${process.env.API_URL}/assets/:path*`,
      },
      {
        source: "/api/:path*",
        destination: `${process.env.API_URL}/api/:path*`,
      },
      {
        source: "/mock/:path*",
        destination: `${process.env.API_URL}/mock/:path*`,
      },
    ]
  },
  env: {
    API_URL: process.env.API_URL,
  },
};
