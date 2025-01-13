import type { Metadata } from "next";
import {
  DM_Serif_Display,
  Geist,
  Geist_Mono,
  League_Spartan,
} from "next/font/google";
import "./globals.css";
import Navbar from "./common/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display", // Custom variable for DM Serif
  subsets: ["latin"],
  weight: "400",
});

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan", // Custom variable for League Spartan
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSerifDisplay.variable} ${leagueSpartan.variable} antialiased`}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
