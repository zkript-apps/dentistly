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
		GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
		GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
		FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
		FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET,
	},
};
