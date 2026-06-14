import type { Metadata } from "next";
import { Roboto, Open_Sans, Oswald } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kooli veebileht",
  description: "Vadim Melnikov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` ${roboto.variable} ${openSans.variable} ${oswald.variable}`}>
      <body>{children}</body>
    </html>
  );
}
