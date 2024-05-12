import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/layout";
import './globals.scss';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "appscrip-task",
  
description:"Online Shopping Site for Fashion & Lifestyle in India. India's Fashion Expert brings you a variety of footwear, Clothing, Accessories and lifestyle products for women & men. Best Online Fashion Store *COD *Easy returns and exchanges.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

      <Layout>{children}</Layout>
      </body>
    </html>
  );
}
