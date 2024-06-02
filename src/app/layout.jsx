import { Inter } from "next/font/google";

import "./globals.css";

import { SITENAME, SITENAME_DESCRİPTİON } from "contants";
import { Footer, Header } from "components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: SITENAME,
  description: SITENAME_DESCRİPTİON,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={(inter.className,'h-screen')}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
