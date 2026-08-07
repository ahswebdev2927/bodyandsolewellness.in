import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-context";
import Script from "next/script";
import CanonicalTag from "@/components/layout/CanonicalTag";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Wellness & Peace | Premium Cosmic Wellness & Reiki Healing",
  description: "Experience professional Reiki healing, Twin Flame healing, and spiritual transformation at Wellness & Peace. A sanctuary of peace, balance, and luxury holistic therapy.",
  keywords: ["Reiki Healing", "Karmic Reiki", "Twin Flame Healing", "Violet Flame Healing", "Distance Healing", "Cosmic Wellness", "Spiritual Healing", "Luxury Spa", "Soul Contract Cancellation", "Ancestral Healing", "Money Reiki Healing"],
  authors: [{ name: "Wellness & Peace" }],
  icons: {
    icon: "/Reikifav.png",
    shortcut: "/Reikifav.png",
    apple: "/Reikifav.png",
  },
  openGraph: {
    title: "Wellness & Peace | Premium Cosmic Wellness & Reiki Healing",
    description: "Realign your mind, body, and spirit in our modern luxury energy healing sanctuary.",
    type: "website",
  },
  verification: {
    google: "TATLUUF7a6p1MckeFrVWt5Be1CaKcRvKf9nLlwvqsmQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
      style={{ colorScheme: "light" }}
      data-scroll-behavior="smooth"
    >
      <head>
        <CanonicalTag />
      </head>
      <body className="min-h-full flex flex-col font-sans selection:bg-purple-200/30 selection:text-purple-100">
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2XLRJH1K16"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2XLRJH1K16');
          `}
        </Script>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

