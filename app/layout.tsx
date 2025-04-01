"use client";

import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const isTop = path === "/";
  return (
    <html lang="ja">
      <body className={isTop ? "top" : ""}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
