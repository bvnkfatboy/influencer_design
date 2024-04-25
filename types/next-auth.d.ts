import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: User & DefaultSession["user"];
  }

  interface User {
    role: String | null;
    image: String | null;
    id: String | null;
    email: String | null;
    provider: String | null;
  }
}
