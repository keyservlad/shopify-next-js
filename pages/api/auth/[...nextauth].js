import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {
  createAccessToken,
  getCustomerLight,
} from "../../../lib/shopifyCustomer";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      id: "EmovinShopify",
      name: "EmovinShopify",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        // const res = await fetch("/your/endpoint", {
        //   method: "POST",
        //   body: JSON.stringify(credentials),
        //   headers: { "Content-Type": "application/json" },
        // });
        // const user = await res.json();

        // If no error and we have user data, return it
        // if (res.ok && user) {
        //   return user;
        // }
        // // Return null if user data could not be retrieved
        // return null;

        const token = await createAccessToken(
          credentials.email,
          credentials.password
        );

        if (token.customerAccessToken) {
          const userWithoutToken = await getCustomerLight(
            token.customerAccessToken.accessToken
          );

          const user = {
            token: token.customerAccessToken,
            userWithoutToken,
          };
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  // events: {
  //   signOut: async (message) => {

  //   },
  // },
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user; // Setting token in session
      return session;
    },
  },
  // Enable debug messages in the console if you are having problems
  debug: process.env.NODE_ENV === "development",
});
