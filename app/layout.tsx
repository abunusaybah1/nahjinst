import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "An-Nahj Islamic Institute",
  description:
    " An-Nahj Islamic Institute is an online Islamic institute dedicated to providing authentic Islamic education, focusing on Qur’an memorization, Arabic language, Hadith, and Fiqh. Our mission is to make learning accessible and engaging for students worldwide, fostering a deep connection with the teachings of Islam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#144727" />
      </head>
      <body className="min-h-full flex flex-col">
        <Header></Header>
        <div className="pt-28">{children}</div>
        <Footer></Footer>
      </body>
    </html>
  );
}
