import type { Metadata } from "next";
import { Noto_Serif_JP, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { RedDot } from "@/components/RedDot";

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "なまにえ — Raw Offerings from KCA",
  description:
    "なまにえは、KCA（Art × Business School）の仲間たちが運営するWebメディアです。生のまま、差し出す。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSerifJP.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased">
        <RedDot />
        <Nav />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
