import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: "Login",
      credentials: {
        username: { label: "Email", type: "text", placeholder: "Enter your registered email" },
        password: { label: "Password", type: "password", placeholder: "Enter yoru password" },
      },
      // @ts-ignore
      async authorize(credentials: any) {
        const user = { id: "1", name: "aditya", email: "nhi bataunga" };

        return {
          id: "1",
          name: "aditya",
          email: "nhi bataunga",
          password: "password",
          email2: "email2",
        }
        // return {
        //   id: "user1",
        //   name: "aditya",
        //   description: "how's it going",
        // };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    //   console.log("token is ");
    // async jwt({ token }) {
    //   console.log(token);
    //   token.userId = token.sub;
    //   return token;
    // },

    async session({ session, token }: any) {
      if (session && session.user) {
        // session.user.id = token.userId;
        session.user.id = token.sub;
      }
      return session;
    }
  },
}


