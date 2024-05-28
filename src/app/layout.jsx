import { Inter } from "next/font/google";

import "./globals.css";

import { SITENAME,SITENAME_DESCRİPTİON } from "contants";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: SITENAME,
  description: SITENAME_DESCRİPTİON,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
