import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luis Figueroa | Hardware & IoT Engineer | Custom PCBs & Embedded Systems",
  description: "Hardware engineer specializing in custom PCB design, ESP32 systems, and IoT devices. View my projects including AstraRMM, air quality monitors, and network monitoring hardware.",
  keywords: ["hardware engineer", "IoT engineer", "PCB design", "ESP32", "embedded systems", "custom electronics"],
  authors: [{ name: "Luis Figueroa" }],
  openGraph: {
    type: "website",
    url: "https://luifigueroa.com",
    title: "Luis Figueroa | Hardware & IoT Engineer",
    description: "I design custom PCBs and build production-ready IoT devices. View my hardware projects and technical skills.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
