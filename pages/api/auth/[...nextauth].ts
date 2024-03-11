// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";

const options = {
	providers: [
		FacebookProvider({
			clientId: "1027899781769544",
			clientSecret: "6f0084d9f7e4d22ec3eb4842bc5d553c",
		}),
		GoogleProvider({
			clientId:
				"513636772773-htf4ahh9upo5r4c3nvu9jkqdll5vf30n.apps.googleusercontent.com",
			clientSecret: "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",
		}),
	],
};

export default NextAuth(options);
