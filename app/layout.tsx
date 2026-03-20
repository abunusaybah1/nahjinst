import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export const metadata: Metadata = {
  title: "An-Nahj Islamic Institute",
  description:
    " An-Nahj Islamic Institute is a non-profit organization dedicated to providing high-quality Islamic education and resources to individuals of all backgrounds. Our mission is to promote a deeper understanding of Islam and its teachings, while fostering a sense of community and spiritual growth among our students and followers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
