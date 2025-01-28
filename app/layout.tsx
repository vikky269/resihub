
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AnalyticsWrapper from './AnalyticsWrapper'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "ResiHub – Connecting Residents, Empowering Communities",
  description: "ResiHub connects residents and empowers communities through streamlined communication and accessible resources.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
       <Navbar />
        <main>
        <AnalyticsWrapper />
          {children}
        </main>
        <Footer />
      </body>
      
    </html>
  );
}
