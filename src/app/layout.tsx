import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/providers";
const kanit = Kanit({ subsets: ["thai"], weight: "400" });
import NavBar from "@/components/navbar";
export const metadata: Metadata = {
  title: "Influencer Designs",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
