import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://neel-nextjs-portfolio.vercel.app"),
  title: "Neel's Portfolio",
  description:
    "Full-stack web developer with expertise in modern technologies and responsive design",
  authors: [{ name: "Neel Narwadkar" }],
  openGraph: {
    title: "Neel Narwadkar | Portfolio",
    description:
      "Full-stack web developer with expertise in modern technologies and responsive design",
    url: "https://neel-nextjs-portfolio.vercel.app",
    images: [
      {
        url: "/assets/images/N.png", // Ensure this path is correct relative to your public directory
        alt: "Neel Narwadkar Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neel Narwadkar | Portfolio",
    description:
      "Welcome to Neel's Portfolio Website. Neel is a full stack web developer. He specializes in building accessible and pixel perfect UI for websites and web applications as well as REST APIs.",
    images: [
      {
        url: "/assets/images/N.png", // Ensure this path is correct relative to your public directory
        alt: "Neel Narwadkar Logo",
      },
    ],
  },
  keywords: [
    "Neel",
    "Narwadkar",
    "Neel Narwadkar",
    "portfolio",
    "react",
    "react.js",
    "next",
    "next.js",
    "front-end",
    "frontend",
    "development",
    "full stack",
    "web",
    "developer",
    "freelance",
    "node.js",
    "node",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "website",
    "Mern stack",
  ],
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
