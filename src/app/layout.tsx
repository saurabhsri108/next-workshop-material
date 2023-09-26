import "./../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./(public)/components/server/header";
import Footer from "./(public)/components/server/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "NextJS 13 - App Router",
  description: "Learning in public",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
