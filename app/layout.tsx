import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navigation from "@/components/navigation"
import { Suspense } from "react"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
})

export const metadata: Metadata = {
  title: "KolCode - Where tradition meets technology",
  description: "Where tradition meets technology in the language of Kolams",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} ${roboto.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
