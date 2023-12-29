import "@radix-ui/themes/styles.css";
import './theme-config.css';
import "./globals.css";

import { Theme } from "@radix-ui/themes";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./Navbar";
import Footer from "./Footer";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});


export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "My first Next and Tyscript App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme
          appearance="light"
          accentColor="purple"
          grayColor="gray"
          radius="small"
        >
          <NavBar />
          <main className="p-5">{children}</main>
        </Theme>
        <Footer />
      </body>
    </html>
  );
}
