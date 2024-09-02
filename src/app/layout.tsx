import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import * as React from "react";
import ResponsiveAppBar from "./component/Navbar";
import Box from "@mui/material/Box";
import BottomNavigation from "./component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // @ts-ignore
  // @ts-ignore
  return (

    <html lang="en" className="relative font-[IBM Plex Sans Thai]">
    <body className={inter.className}>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@400;500;600&family=Itim&display=swap"
          rel="stylesheet" />

    <div className=" fixed top-0 w-full z-50">
      <ResponsiveAppBar />
    </div>
    <div className="pt-14">
      {children}
    </div>
    <div className=" fixed bottom-0 w-screen">
      <BottomNavigation />
    </div>
    </body>
    </html>
  );
}
