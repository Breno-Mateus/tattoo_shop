import type { Metadata } from "next";
import { Londrina_Solid, Inter } from "next/font/google";
import "./globals.css";

const londrinaSolid = Londrina_Solid({
  weight: ["100", "300", "400", "900"],
  variable: "--font-londrina-solid",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tattoo Shop",
  description: "Página comercial de um tatuador.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${londrinaSolid.variable} ${inter.variable} antialiased`}>
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}
