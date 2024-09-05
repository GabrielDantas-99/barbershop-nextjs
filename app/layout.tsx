import type { Metadata } from "next"
import { Bebas_Neue, Inter } from "next/font/google"
import "./globals.css"
import Footer from "./_components/footer"
import { Toaster } from "./_components/ui/sonner"
import AuthProvider from "./_providers/auth"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const logofont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebeas",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans ${logofont.variable}`}>
        <AuthProvider>
          <div className="flex h-full flex-col">
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  )
}
