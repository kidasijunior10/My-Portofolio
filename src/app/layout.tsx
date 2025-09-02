import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import Header from "./components/Header";
import I18nProvider from "./components/I18nProvider";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Linga Joachim Kidasi - Portfolio",
  description: "Software Engineer & Multimedia Designer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${inter.variable} font-inter antialiased`}
      >
        <I18nProvider>
          <Header />
          {children}
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  );
}