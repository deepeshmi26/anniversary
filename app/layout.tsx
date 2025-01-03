import "./globals.css";
import { Playfair_Display } from "next/font/google";
import type { Metadata } from "next";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Our First Anniversary",
  description: "Celebrating one year of love and happiness together",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.className}`}>{children}</body>
    </html>
  );
}
