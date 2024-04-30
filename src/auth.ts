import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import * as bcrypt from "bcrypt";
import apiRequest from "@/lib/apiRequest";
import Facebook from "next-auth/providers/facebook";
import Google from "next-auth/providers/google";
import Line from "next-auth/providers/line";
import { image } from "@nextui-org/react";
import { useRouter, redirect } from "next/navigation";

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: false,
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      // @ts-ignore
      authorize: async (credentials) => {
        // try {
        //   const { data: user } = await apiRequest.post("api/auth/login", {
        //     email: credentials?.email,
        //     password: credentials?.password,
        //   });
        //   if (user) {
        //     return user;
        //   } else {
        //     return null;
        //   }
        // } catch (error: any) {

        // }
        const user = {
          id: "1",
          name: "J Smith",
          email: credentials?.email,
          password: credentials?.password,
          image: "https://i.imgur.com/QDN1420.png",
        };

        if (
          credentials?.email === user.email &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),

    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      //@ts-ignore
      pkce: true,
      authorization: {
        url: "https://accounts.google.com/o/oauth2/v2/auth",
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
      // @ts-ignore
      async profile(profile) {
        const provider = "Google";

        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          // provider: provider,
        };
        // const { data: user } = await apiRequest.post("/api/auth/social/find", {
        //   email: profile.email,
        // });
        // if (!user) {
        //   const newUser = {
        //     email: profile.email,
        //     name: profile.name,
        //     image: profile.picture,
        //     socialId: profile.sub,
        //     provider: provider,
        //   };
        //   const { data: user } = await apiRequest.post(
        //     "/api/auth/social/create",
        //     newUser
        //   );
        //   return Promise.resolve(user);
        // } else {
        //   if (user && user.provider == provider) {
        //     return Promise.resolve(user);
        //   } else {
        //     return Promise.resolve(null);
        //   }
        // }
      },
    }),
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      authorization: {
        // The URL to redirect the user to for authorization
        url: "https://www.facebook.com/v13.0/dialog/oauth",
        // The URL the user will be redirected to after the authorization flow
        redirectUri: `${process.env.CLIENT_URL}api/auth/callback/facebook`,
      },
      // @ts-ignore
      scope: "email",
      // @ts-ignore
      http: false,
      // @ts-ignore
      pkce: true,
      //@ts-ignore
      async profile(profile) {
        // console.log(JSON.stringify(profile, null, 2))
        const provider = "Facebook";
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.picture.data.url,
          // provider: provider,
        };
        // const { data: user } = await apiRequest.post("/api/auth/social/find", {
        //   email: profile.email,
        // });
        // if (!user) {
        //   const newUser = {
        //     socialId: profile.id,
        //     name: profile.name,
        //     email: profile.email,
        //     image: profile.picture.data.url,
        //     provider: provider,
        //   };
        //   const { data: user } = await apiRequest.post(
        //     "/api/auth/social/create",
        //     newUser
        //   );
        //   return Promise.resolve(user);
        // } else {
        //   if (user && user.provider == provider) {
        //     return Promise.resolve(user);
        //   } else {
        //     return Promise.resolve(null);
        //   }
        // }
      },
    }),

    Line({
      clientId: process.env.LINE_CLIENT_ID,
      clientSecret: process.env.LINE_CLIENT_SECRET,
      authorization: {
        url: "https://access.line.me/oauth2/v2.1/authorize",
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          state: "d5c9b7b1-9d5f-4a3e-9b5d-8f1e4b9c5d6f",
        },
      },
      //@ts-ignore
      async profile(profile) {
        const provider = "Line";
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          // provider: provider,
        };
        // const { data: user } = await apiRequest.post("/api/auth/social/find", {
        //   email: profile.email,
        // });
        // if (!user) {
        //   const newUser = {
        //     socialId: profile.sub,
        //     name: profile.name,
        //     email: profile.email,
        //     image: profile.picture,
        //     provider: provider,
        //   };
        //   // console.log(JSON.stringify(newUser, null, 2));

        //   const { data: user } = await apiRequest.post(
        //     "/api/auth/social/create",
        //     newUser
        //   );
        //   return Promise.resolve(user);
        // } else {
        //   if (user && user.provider == provider) {
        //     return Promise.resolve(user);
        //   } else {
        //     return Promise.resolve(null);
        //   }
        // }
      },
    }),
  ],
  pages: {
    error: "/",
  },
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.user = user;
      }
      return Promise.resolve(token);
    },
    async session({ session, user, token }) {
      if (token) {
        // @ts-ignore
        session.user = token.user;
      }
      return Promise.resolve(session);
    },

    //@ts-ignore
    async signOut({ session, token }) {
      session = null;
      token = null;
      // const Router = useRouter();
      redirect("/");
      return [Promise.resolve([session, token])];
    },
  },
});
