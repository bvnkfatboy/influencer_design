/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "picsum.photos",
      },
      {
        hostname: "i.imgur.com",
      },
      {
        protocol: "https",
        hostname: "platform-lookaside.fbsbx.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "profile.line-scdn.net",
        port: "",
        pathname: "/**",
      },
    ],
    // unoptimized: true,
  },
  env: {
    SERVER_URL: "https://s5m884fj-8000.asse.devtunnels.ms/",
    AUTH_SECRET: "gEGsQQTyRs2ajJVyWH95hqj/XoelRKxt2fFmqQzc354=",

    FACEBOOK_CLIENT_ID: "789337913152138",
    FACEBOOK_CLIENT_SECRET: "b803e671f66aefd943197531059411b5",

    GOOGLE_CLIENT_ID:
      "686619648224-ku4sh3jkuobjorcc2e3rg5o3mtmc3mgq.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",

    LINE_CLIENT_ID: "2004695874",
    LINE_CLIENT_SECRET: "b79a8e5ec47dd77eeb0dd822ed9e0f19",
    LINE_STATE: "d5c9b7b1-9d5f-4a3e-9b5d-8f1e4b9c5d6f",
  },
  reactStrictMode: true,
};

export default nextConfig;
