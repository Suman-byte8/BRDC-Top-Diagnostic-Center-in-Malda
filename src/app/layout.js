import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Top Diagnostic Center in Malda | Lab & USG",
    template: "%s | BRDC Malda"
  },
  description: "BRDC (Bisweswari Roy Diagnostic & Polyclinic Centre) is the leading diagnostic center in Malda, offering CT Scan, USG, X-Ray, Pathology, and specialized doctor consultations.",
  keywords: ["Diagnostic Center Malda", "Best USG in Malda", "CT Scan Malda", "BRDC Malda", "Medical Clinic Malda"],
  icons: {
    icon: "/favicon.png",
  },
};

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
