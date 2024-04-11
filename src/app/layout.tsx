import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import AuthProvider from "@/providers/AuthProvider";
import { getAuthSession } from "@/utils/auth";
import ToastProvider from "@/providers/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creativity Nexus | Art Blogs",
  description: "Art Blogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
      <ToastProvider/>
        <AuthProvider>
        <div className="container">
            <div className="sticky top-0 z-50  w-full" style={{ backgroundColor: 'var(--navBg)' }}>
            <Navbar/>
            </div>
            <div className="wrapper pb-10">
             {children}
             {/* <Footer/> */}
             </div>
        </div>
        </AuthProvider>
        </body>
    </html>
  );
}
