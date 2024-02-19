import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import "@/app/ui/global.css";
import NavBar from "@/app/ui/NavBar";
import Footer from "@/app/ui/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen flex-col antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
