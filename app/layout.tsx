import type { Metadata } from "next";
import { Inter } from "next/font/google";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import "./globals.css";

import clsx from "clsx";

import SessionProvider from "./SessionProvider";

import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shine Treasures",
  description: "Find your inspiration here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(`${inter.className}, flex min-h-screen flex-col`)}>
        <Toaster />
        <SessionProvider>
          <NavBar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
