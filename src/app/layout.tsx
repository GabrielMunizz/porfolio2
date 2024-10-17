import type { Metadata } from "next";
import { Inter, Bebas_Neue, Covered_By_Your_Grace } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
});
const covered = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-covered-by-your-grace",
});

export const metadata: Metadata = {
  title: "Gabriel Muniz Portfolio",
  description: "Welcome to my portfolio! Hope you enjoy it!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.className} ${bebas.variable} ${covered.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
