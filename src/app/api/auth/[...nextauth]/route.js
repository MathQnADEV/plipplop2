// KONEKSI KE Oauth GITHUB
import nextAuth from "next-auth";
import githubAuth from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const authOption = {
  // provider nya ini bisa kek google, pesbuk, dkk tapi import dulu di next-auth/providers/... yach
  providers: [
    githubAuth({
      clientId: process.env.GITHUB_CLIENT,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = nextAuth(authOption)

// bawaan awikwok
export {handler as GET, handler as POST}