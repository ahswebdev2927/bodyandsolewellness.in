import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-context";

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
  keywords: ["Reiki Healing", "Karmic Reiki", "Twin Flame Healing", "Violet Flame Healing", "Distance Healing", "Cosmic Wellness", "Spiritual Healing", "Luxury Spa"],
  authors: [{ name: "Wellness & Peace" }],
  openGraph: {
    title: "Wellness & Peace | Premium Cosmic Wellness & Reiki Healing",
    description: "Realign your mind, body, and spirit in our modern luxury energy healing sanctuary.",
    type: "website",
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
      className={`${cormorant.variable} ${inter.variable} h-full antialiased dark`} // default to dark
      style={{ colorScheme: "dark" }}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-purple-200/30 selection:text-purple-100">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
