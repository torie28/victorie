import React from "react"
import type { Metadata } from "next"
import { Outfit, Cormorant } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Singita-style pairing: geometric sans (Europa-like) + soft transitional serif (Morion-like)
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "700"],
})
const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Victoria Expeditions | Bespoke African Curations",
  description:
    "Unrivaled private safaris, Kilimanjaro treks, and Zanzibar retreats. Experience the pinnacle of African exploration with Victoria Expeditions.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${cormorant.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
