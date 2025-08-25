import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin", "hebrew"] });

export const metadata: Metadata = {
  title: "DrApp",
  description: "Innovative Apps for Modern Therapy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${rubik.className} bg-precious-pearls text-lost-in-sadness`}>{children}</body>
    </html>
  );
}
