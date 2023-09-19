import "./../styles/globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import Header from "./header";
import Footer from "./footer";

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "NextJS 13 - App Router",
  description: "Learning in public",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("Root Layout");
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
