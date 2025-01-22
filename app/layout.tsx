import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Rubik } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const rubik = Rubik({ 
  variable: '--font-rubik',
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: "Superknowa",
  description: "Superknowa designs, architects, and develops systems for clients that are secure, scalable, resilient, and easy to maintain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rubik.variable} font-rubik antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
