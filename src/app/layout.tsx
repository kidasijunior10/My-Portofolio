import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
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
  title: "Linga Joachim Kidasi - Portfolio | Software Engineer & Multimedia Designer",
  description: "Professional portfolio of Linga Joachim Kidasi, a Software Engineer and Multimedia Designer from Burundi. Specializing in web development, motion graphics, and creative design solutions.",
  keywords: ["Software Engineer", "Multimedia Designer", "Web Development", "Motion Graphics", "Portfolio", "Burundi", "Next.js", "Laravel", "Adobe Creative Suite"],
  authors: [{ name: "Linga Joachim Kidasi" }],
  creator: "Linga Joachim Kidasi",
  publisher: "Linga Joachim Kidasi",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.vercel.app",
    title: "Linga Joachim Kidasi - Portfolio",
    description: "Software Engineer & Multimedia Designer Portfolio",
    siteName: "Linga Joachim Kidasi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Linga Joachim Kidasi - Portfolio",
    description: "Software Engineer & Multimedia Designer Portfolio",
  },
  verification: {
    google: "your-google-verification-code", // Add this when you get it
  },
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
        <SpeedInsights />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Linga Joachim Kidasi",
              "jobTitle": "Software Engineer & Multimedia Designer",
              "description": "Professional software engineer and multimedia designer specializing in web development and creative design solutions.",
              "url": "https://your-domain.vercel.app",
              "sameAs": [
                "https://linkedin.com/in/your-profile",
                "https://github.com/your-username"
              ],
              "knowsAbout": [
                "Web Development",
                "Software Engineering",
                "Motion Graphics",
                "Graphic Design",
                "Next.js",
                "Laravel",
                "Adobe Creative Suite"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}