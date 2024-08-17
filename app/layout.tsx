import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neel's Portfolio",
  description:
    "Full-stack web developer with expertise in modern technologies and responsive design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="dark">
          <Navbar />

          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
