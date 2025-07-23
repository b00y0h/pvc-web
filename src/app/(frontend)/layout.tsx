import React from "react";
import type { Metadata } from "next";

import "~/styles/globals.css";
import { Inter } from "next/font/google";
// import "./globals.css"
import { Navbar } from "~/components/navbar";
import { Footer } from "~/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Patriot Volleyball Club",
  description:
    "Premier travel volleyball club in Central Virginia developing champions on and off the court",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
