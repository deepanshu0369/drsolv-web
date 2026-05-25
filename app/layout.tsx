import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalShaderBackground from "@/components/ui/GlobalShaderBackground";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const display = Inter_Tight({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "DRSOLV — Building India's medical-grade biosensing wearable with emergency response",
  description:
    "DRSOLV is building India's first medical-grade biosensing wearable with battery-free QR identification, continuous vital monitoring, and AI-powered emergency response. Incubated at GICRISE, DPIIT-recognised.",
  metadataBase: new URL("https://drsolv.in"),
  openGraph: {
    title:
      "DRSOLV — Building India's medical-grade biosensing wearable with emergency response",
    description:
      "DRSOLV is building India's first medical-grade biosensing wearable with battery-free QR identification, continuous vital monitoring, and AI-powered emergency response.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} h-full`}>
      <body className="min-h-full bg-transparent text-fg antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <GlobalShaderBackground />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
