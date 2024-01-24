/** @type {import("next").NextConfig} */
const { existsSync } = require("fs");
require("dotenv").config({
  path: existsSync("../../.env") ? "../../.env" : "../../../.env",
});

module.exports = {
  env: {
    API_URL: process.env.API_URL,
  },
};
