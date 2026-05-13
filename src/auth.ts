import NextAuth from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [],
});

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}
