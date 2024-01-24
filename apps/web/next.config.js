/** @type {import("next").NextConfig} */
const { existsSync } = require("fs");
require("dotenv").config({
  path: existsSync("../../.env") ? "../../.env" : "../../../.env",
});

module.exports = {
  reactStrictMode: true,

  env: {
    API_URL: process.env.API_URL,
    ORIGINS: process.env.ORIGINS,
  },
};
