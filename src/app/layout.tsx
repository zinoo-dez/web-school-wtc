import type { Metadata } from "next";
import { Geist_Mono, Philosopher } from "next/font/google";
import "./globals.css";

const philosopher = Philosopher({
  subsets: ['latin'],
  weight: ['400', '700'], // Match your weights
  style: ['normal', 'italic'], // Include italic
  variable: '--font-philosopher', // Optional: CSS variable
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coding School",
  description: "Welcome to my coding school!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${philosopher.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
