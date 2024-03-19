// pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";

const options = {
<<<<<<< HEAD
	providers: [
		FacebookProvider({
			clientId: process.env.FACEBOOK_CLIENT_ID as string,
			clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
	],
=======
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
>>>>>>> 44ea9e5e39b8474c88c4204de5c97637da8485f1
};

export default NextAuth(options);
