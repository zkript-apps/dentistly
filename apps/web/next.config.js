/** @type {import("next").NextConfig} */
const { existsSync } = require("fs");
require("dotenv").config({
	path: existsSync("../../.env") ? "../../.env" : "../../../.env",
});

module.exports = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "3000",
				pathname: "/*",
			},
			{
				protocol: "http",
				hostname: "localhost",
				port: "3000",
				pathname: "/assets/**",
			},
		],
	},
  async rewrites() {
    return [
      {
        source: "/assets/:path*",
        destination: `http://localhost:3000`, 
		// `${process.env.API_URL}/assets/:path*`,
      },
    ];
  },

	env: {
		API_URL: process.env.API_URL,
		API_AUTH_URL: process.env.API_AUTH_URL,
		API_MOCK_URL: process.env.API_MOCK_URL,
		WEB_URL: process.env.WEB_URL,
		NEXTAUTH_URL: process.env.NEXTAUTH_URL,
		NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
		GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
		GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
		FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
		FACEBOOK_SECRET_ID: process.env.FACEBOOK_SECRET_ID,
		CARD_ENCRYPT_KEY: process.env.CARD_ENCRYPT_KEY,
		PASSWORD_ENCRYPT_KEY: process.env.PASSWORD_ENCRYPT_KEY,
	},
};
