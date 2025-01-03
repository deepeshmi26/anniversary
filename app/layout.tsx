import "./globals.css";
import {
  Inter,
  Dancing_Script,
  Playfair_Display,
  Cormorant,
} from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant({
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
