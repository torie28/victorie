import React from "react"
import type { Metadata } from "next"
import { Montserrat, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
export const metadata: Metadata = { title: "Victoria Expeditions | Bespoke African Curations", description: "Unrivaled private safaris, Kilimanjaro treks, and Zanzibar retreats. Experience the pinnacle of African exploration with Victoria Expeditions." };
export default function RootLayout({ children }) { return (
  <html lang="en">
    <body className={`${montserrat.variable} ${playfair.variable} font-sans antialiased`}>
      {children}
      <Analytics />
    </body>
  </html>
  );
}
