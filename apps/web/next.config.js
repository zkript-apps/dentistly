/** @type {import("next").NextConfig} */
const { existsSync } = require("fs");
require("dotenv").config({
  path: existsSync("../../.env") ? "../../.env" : "../../../.env",
});

module.exports = {
  // Before you can use env vars in this NextJS project,
  // you need to add all of it in the env object below.
  // Ex: MONGO_URL: process.env.MONGO_URL
  env: {
    API_URL: process.env.API_URL,
  },
};
