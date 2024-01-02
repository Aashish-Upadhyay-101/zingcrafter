import NextAuth from "next-auth";
import { NEXT_AUTH_OPTIONS } from "@zingcrafter/lib/next-auth/auth-options";

const handler = NextAuth({
  ...NEXT_AUTH_OPTIONS,
  pages: {
    signIn: "/signin",
    signOut: "/signout",
    error: "/signin",
  },
});

export { handler as GET, handler as POST };
